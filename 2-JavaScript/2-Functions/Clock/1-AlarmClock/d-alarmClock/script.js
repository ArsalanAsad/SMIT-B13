class AlarmManager {
    constructor() {
        this.alarms = JSON.parse(localStorage.getItem('alarms')) || [];
        this.activeAlarm = null;
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.notificationPermission = false;
        
        // DOM Elements
        this.elements = {
            time: document.getElementById('time'),
            date: document.getElementById('date'),
            alarmTime: document.getElementById('alarmTime'),
            alarmsList: document.getElementById('alarmsList'),
            ringtoneSelect: document.getElementById('ringtoneSelect'),
            customSound: document.getElementById('customSound'),
            addAlarm: document.getElementById('addAlarm'),
            stopAlarm: document.getElementById('stopAlarm'),
            snoozeAlarm: document.getElementById('snoozeAlarm'),
            alarmSound: document.getElementById('alarmSound'),
        };

        // Initialize
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateDateTime();
        this.loadAlarms();
        this.setupNotifications();
        this.applyTheme();
        setInterval(() => this.updateDateTime(), 1000);
    }

    setupEventListeners() {
        this.elements.addAlarm.addEventListener('click', () => this.addAlarm());
        this.elements.stopAlarm.addEventListener('click', () => this.stopAlarm());
        this.elements.snoozeAlarm.addEventListener('click', () => this.snoozeAlarm());
        this.elements.ringtoneSelect.addEventListener('change', (e) => this.handleRingtoneChange(e));
        this.elements.customSound.addEventListener('change', (e) => this.handleCustomSound(e));
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    // Feature Implementations
    addAlarm() {
        const time = this.elements.alarmTime.value;
        if (!time) return;

        const alarm = {
            id: Date.now(),
            time,
            repeat: this.getRepeatDays(),
            sound: this.getSelectedSound(),
            active: true,
            snoozed: false
        };

        this.alarms.push(alarm);
        this.saveAlarms();
        this.renderAlarms();
        this.elements.alarmTime.value = '';
    }

    deleteAlarm(id) {
        this.alarms = this.alarms.filter(alarm => alarm.id !== id);
        this.saveAlarms();
        this.renderAlarms();
    }

    toggleAlarm(id) {
        const alarm = this.alarms.find(a => a.id === id);
        if (alarm) {
            alarm.active = !alarm.active;
            this.saveAlarms();
            this.renderAlarms();
        }
    }

    checkAlarms() {
        const now = new Date();
        const currentTime = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
        });

        this.alarms.forEach(alarm => {
            if (alarm.active && this.shouldTrigger(alarm, currentTime, now)) {
                this.triggerAlarm(alarm);
            }
        });
    }

    triggerAlarm(alarm) {
        this.activeAlarm = alarm;
        this.playSound(alarm.sound);
        this.showNotification();
        this.updateUI(true);
    }

    stopAlarm() {
        if (this.activeAlarm) {
            this.pauseSound();
            this.activeAlarm.snoozed = false;
            this.updateUI(false);
            this.activeAlarm = null;
        }
    }

    snoozeAlarm() {
        if (this.activeAlarm) {
            this.pauseSound();
            this.activeAlarm.snoozed = true;
            setTimeout(() => {
                if (this.activeAlarm?.snoozed) {
                    this.triggerAlarm(this.activeAlarm);
                }
            }, 5 * 60 * 1000); // 5 minutes
            this.updateUI(false);
        }
    }

    // Helper Methods
    getRepeatDays() {
        return Array.from(document.querySelectorAll('[name="repeat"]:checked'))
                   .map(checkbox => checkbox.value);
    }

    shouldTrigger(alarm, currentTime, now) {
        if (alarm.snoozed) return false;
        if (alarm.time !== currentTime) return false;
        
        const day = now.getDay();
        return alarm.repeat.some(repeat => {
            switch(repeat) {
                case 'daily': return true;
                case 'weekdays': return day >= 1 && day <= 5;
                case 'weekends': return day === 0 || day === 6;
                default: return true;
            }
        });
    }

    // Persistence
    saveAlarms() {
        localStorage.setItem('alarms', JSON.stringify(this.alarms));
    }

    loadAlarms() {
        this.alarms = JSON.parse(localStorage.getItem('alarms')) || [];
        this.renderAlarms();
    }

    // Notifications
    async setupNotifications() {
        this.notificationPermission = await Notification.requestPermission();
    }

    showNotification() {
        if (this.notificationPermission === 'granted' && document.hidden) {
            new Notification('Alarm Triggered!', {
                body: 'Your alarm is ringing!',
                icon: 'icon.png'
            });
        }
    }

    // Sound Management
    playSound(source) {
        this.elements.alarmSound.src = this.getSoundSource(source);
        this.elements.alarmSound.loop = true;
        this.elements.alarmSound.play();
    }

    pauseSound() {
        this.elements.alarmSound.pause();
        this.elements.alarmSound.currentTime = 0;
    }

    getSoundSource(source) {
        const sounds = {
            classic: 'https://assets.mixkit.co/active_storage/sfx/2575/2575-preview.mp3',
            digital: 'https://assets.mixkit.co/active_storage/sfx/2591/2591-preview.mp3',
            nature: 'https://assets.mixkit.co/active_storage/sfx/2504/2504-preview.mp3',
            custom: this.elements.customSound.files[0] || ''
        };
        return sounds[source] || sounds.classic;
    }

    // Theme Management
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme() {
        document.body.setAttribute('data-theme', this.currentTheme);
    }

    // UI Updates
    updateDateTime() {
        const now = new Date();
        this.elements.time.textContent = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        this.elements.date.textContent = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        this.checkAlarms();
    }

    renderAlarms() {
        this.elements.alarmsList.innerHTML = this.alarms
            .map(alarm => `
                <div class="alarm-item ${alarm.active ? 'active' : ''}">
                    <div class="alarm-time">${alarm.time}</div>
                    <div class="alarm-meta">
                        <span>${alarm.repeat.join(', ') || 'Once'}</span>
                        <span>${alarm.sound}</span>
                        <i class="fas fa-trash delete-btn" 
                           onclick="alarmManager.deleteAlarm(${alarm.id})"
                           aria-label="Delete alarm"></i>
                        <label class="switch">
                            <input type="checkbox" 
                                  ${alarm.active ? 'checked' : ''}
                                  onchange="alarmManager.toggleAlarm(${alarm.id})">
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
            `).join('');
    }

    updateUI(isRinging) {
        this.elements.stopAlarm.disabled = !isRinging;
        this.elements.snoozeAlarm.disabled = !isRinging;
        document.body.classList.toggle('alarm-ringing', isRinging);
    }

    // Event Handlers
    handleRingtoneChange(e) {
        if (e.target.value === 'custom') {
            this.elements.customSound.click();
        }
    }

    handleCustomSound(e) {
        const file = e.target.files[0];
        if (file) {
            this.elements.alarmSound.src = URL.createObjectURL(file);
        }
    }

    handleKeyboard(e) {
        if (e.key === 'Escape' && this.activeAlarm) {
            this.stopAlarm();
        }
        if (e.key === 's' && this.activeAlarm) {
            this.snoozeAlarm();
        }
    }
}

// Initialize Alarm Manager
const alarmManager = new AlarmManager();

// Global functions for HTML event handlers
function toggleTheme() {
    alarmManager.toggleTheme();
}