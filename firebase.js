// firebase.js
import { auth, db } from "./firebase.config.js";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// LOGIN
export async function loginFirebase(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      // Tips: Gunakan || untuk antisipasi jika field di DB berbeda (username vs nama)
      const nameToStore = data.username || data.nama || "User";
      localStorage.setItem("username", nameToStore);
      localStorage.setItem("role", data.role || "user");
    }

    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Login gagal ❌: " + error.message);
  }
}

// LISTEN USER
export function listenUser(callback) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      callback(null);
      return;
    }

    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        callback({
          // Cek field 'username' atau 'nama' agar lebih fleksibel
          username: data.username || data.nama || "Tanpa Nama",
          role: data.role || "santri"
        });
      } else {
        // Jika dokumen user belum dibuat di Firestore
        callback({
          username: user.email.split('@')[0], // Gunakan bagian depan email sebagai nama sementara
          role: "user"
        });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // JANGAN langsung set ke "Santri" jika error, beri tanda loading/error
      callback({
        username: "Error Load Data",
        role: "Unknown"
      });
    }
  });
}

// LOGOUT
export async function logoutFirebase() {
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  await signOut(auth);
}