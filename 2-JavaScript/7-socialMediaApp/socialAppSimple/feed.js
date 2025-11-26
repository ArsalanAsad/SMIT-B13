/* ------------------------------
    GLOBAL CONSTANTS & STATE
------------------------------- */

const MAX_FILE_SIZE_BYTES = 1024 * 1024; // 1MB (LocalStorage limit)

let users = JSON.parse(localStorage.getItem("users")) || [];
let posts = JSON.parse(localStorage.getItem("posts")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

if (!currentUser) {
    window.location.href = "signin.html"; // not logged in
}

/* ------------------------------
        TOAST NOTIFICATION
------------------------------- */

const showToast = (message) => {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => container.removeChild(toast), 300);
    }, 3000);
};

/* ------------------------------
        SAVE + RERENDER FEED
------------------------------- */

const saveAndRender = () => {
    localStorage.setItem("posts", JSON.stringify(posts));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    loadFeed();
};

/* ------------------------------
        LOGOUT
------------------------------- */

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "signin.html";
}

/* ------------------------------
   ENABLE/DISABLE POST BUTTON
------------------------------- */

function handlePostInput() {
    const content = document.getElementById("post-input").value.trim();
    const imageURL = document.getElementById("image-url-input").value.trim();
    const file = document.getElementById("file-upload-input").files[0];

    const enable = content !== "" || imageURL !== "" || file;

    document.getElementById("post-btn").disabled = !enable;
}

/* ------------------------------
        FILE TO BASE64
------------------------------- */

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);

        reader.readAsDataURL(file);
    });
}

/* ------------------------------
        CREATE POST
------------------------------- */

async function createPost() {
    const text = document.getElementById("post-input").value.trim();
    const imageURL = document.getElementById("image-url-input").value.trim();
    const file = document.getElementById("file-upload-input").files[0];

    if (!text && !imageURL && !file) return;

    let base64Image = null;

    if (file) {
        if (file.size > MAX_FILE_SIZE_BYTES) {
            showToast("Error: Max 1MB file allowed.");
            return;
        }

        document.getElementById("post-btn").textContent = "Uploading...";
        document.getElementById("post-btn").disabled = true;

        try {
            base64Image = await convertToBase64(file);
        } catch (err) {
            showToast("Image error.");
        }

        document.getElementById("post-btn").textContent = "Post";
    }

    const newPost = {
        id: Date.now(),
        userId: currentUser.id,
        userName: currentUser.name,
        content: text,
        imageUrl: imageURL,
        base64Image: base64Image,
        timestamp: new Date().toLocaleString(),
        likes: [],
        comments: []
    };

    posts.unshift(newPost);
    saveAndRender();

    // Clear inputs
    document.getElementById("post-input").value = "";
    document.getElementById("image-url-input").value = "";
    document.getElementById("file-upload-input").value = "";
    document.getElementById("post-btn").disabled = true;

    showToast("Post created!");
}

/* ------------------------------
          DELETE POST
------------------------------- */

function deletePost(id) {
    if (!confirm("Are you sure you want to delete this post?")) return;

    posts = posts.filter(p => p.id !== id);
    saveAndRender();
    showToast("Post deleted.");
}

/* ------------------------------
          EDIT POST
------------------------------- */

function editPost(id) {
    const post = posts.find(p => p.id === id);
    const newContent = prompt("Edit your post:", post.content);

    if (newContent && newContent.trim() !== "") {
        post.content = newContent.trim();
        saveAndRender();
        showToast("Post updated.");
    }
}

/* ------------------------------
          LIKE / UNLIKE
------------------------------- */

function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    const userId = currentUser.id;

    if (post.likes.includes(userId)) {
        post.likes = post.likes.filter(id => id !== userId);
        showToast("Unliked.");
    } else {
        post.likes.push(userId);
        showToast("Liked ❤️");
    }

    saveAndRender();
}

/* ------------------------------
         ADD COMMENT
------------------------------- */

function addComment(postId) {
    const text = prompt("Write a comment:");

    if (!text || text.trim() === "") return;

    const post = posts.find(p => p.id === postId);

    post.comments.push({
        userId: currentUser.id,
        userName: currentUser.name,
        text: text.trim()
    });

    saveAndRender();
    showToast("Comment added.");
}

/* ------------------------------
         RENDER FEED
------------------------------- */

function loadFeed() {
    const welcome = document.getElementById("welcome-message");
    welcome.textContent = `Hello, ${currentUser.name}!`;

    const feed = document.getElementById("feed-container");
    feed.innerHTML = "";

    posts.forEach(post => {
        const isOwner = post.userId === currentUser.id;
        const isLiked = post.likes.includes(currentUser.id);

        const wrapper = document.createElement("div");
        wrapper.className = "post";

        const imgSrc = post.base64Image || post.imageUrl;

        wrapper.innerHTML = `
            <div>
                <div style="display:flex; justify-content:space-between;">
                    <strong>${post.userName}</strong>
                    <div>
                        ${isOwner ? `
                            <button onclick="editPost(${post.id})" class="text-blue-500 text-sm mr-2">Edit</button>
                            <button onclick="deletePost(${post.id})" class="text-red-500 text-sm">Delete</button>
                        ` : ""}
                    </div>
                </div>
                <small style="color:gray;">${post.timestamp}</small>

                <p style="margin-top:10px; white-space:pre-wrap;">${post.content}</p>

                ${imgSrc ? `
                    <img src="${imgSrc}" class="post-image" style="margin-top:10px; width:100%; border-radius:10px;">
                ` : ""}
            </div>

            <div style="margin-top:12px; display:flex; justify-content:space-between;">
                <button onclick="toggleLike(${post.id})" class="like-btn">
                    ${isLiked ? "❤️" : "🤍"} ${post.likes.length} Likes
                </button>
                <button onclick="addComment(${post.id})" class="comment-btn">
                    💬 ${post.comments.length} Comments
                </button>
            </div>

            ${post.comments.length > 0 ? `
                <div style="background:#f3f3f3; padding:10px; margin-top:10px; border-radius:8px;">
                    ${post.comments.map(c => `
                        <p><strong>${c.userName}:</strong> ${c.text}</p>
                    `).join("")}
                </div>
            ` : ""}
        `;

        feed.appendChild(wrapper);
    });
}

/* ------------------------------
       INITIAL PAGE LOAD
------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("post-input").addEventListener("input", handlePostInput);
    document.getElementById("image-url-input").addEventListener("input", handlePostInput);

    loadFeed();
});
