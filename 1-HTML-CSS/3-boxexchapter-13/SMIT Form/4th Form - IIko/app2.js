
        function validateForm(event) {
            const syrveServerInput = document.getElementById("syrveServer");
            const syrveErrorElement = document.getElementById("syrveServerError");
            const syrveServerValue = syrveServerInput.value;
            const syrvePattern = /^[a-zA-Z0-9-]+\.syrve\.online$/;

            if (!syrvePattern.test(syrveServerValue)) {
                event.preventDefault();
                syrveErrorElement.textContent = "Invalid format. It must be in the format 'domain.syrve.online'";
                return false;
            }

            syrveErrorElement.textContent = "";
            return true;
        }