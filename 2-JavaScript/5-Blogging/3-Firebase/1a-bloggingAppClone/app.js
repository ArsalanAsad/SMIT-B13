import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

// Firebase configuration (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyCCDoLKSKxX8WOHsO3N-vl43J5R5h-IkNg",
  authDomain: "blogging-app-c2f5a.firebaseapp.com",
  projectId: "blogging-app-c2f5a",
  storageBucket: "blogging-app-c2f5a.firebasestorage.app",
  messagingSenderId: "764131568625",
  appId: "1:764131568625:web:4872271f4f7a4aa682f250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// DOM Elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupButton = document.getElementById('signup');
const loginButton = document.getElementById('login');
const logoutButton = document.getElementById('logout');
const authSection = document.getElementById('auth-section');
const blogSection = document.getElementById('blog-section');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const createPostButton = document.getElementById('create-post');
const postsContainer = document.getElementById('posts');

// Sign Up
signupButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert('User created successfully!');
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Login
loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert('Logged in successfully!');
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Logout
logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
    alert('Logged out successfully!');
  }).catch((error) => {
    alert(error.message);
  });
});

// Create Blog Post
createPostButton.addEventListener('click', () => {
  const title = titleInput.value;
  const content = contentInput.value;
  addDoc(collection(db, 'posts'), {
    title: title,
    content: content,
    timestamp: new Date()
  }).then(() => {
    titleInput.value = '';
    contentInput.value = '';
    loadPosts();
  }).catch((error) => {
    alert(error.message);
  });
});

// Load Blog Posts
function loadPosts() {
  postsContainer.innerHTML = '';
  getDocs(collection(db, 'posts')).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <button onclick="deletePost('${doc.id}')">Delete</button>
      `;
      postsContainer.appendChild(postElement);
    });
  });
}

// Delete Blog Post
window.deletePost = (id) => {
  deleteDoc(doc(db, 'posts', id)).then(() => {
    loadPosts();
  }).catch((error) => {
    alert(error.message);
  });
};

// Auth State Listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    authSection.style.display = 'none';
    blogSection.style.display = 'block';
    loadPosts();
  } else {
    authSection.style.display = 'block';
    blogSection.style.display = 'none';
  }
});