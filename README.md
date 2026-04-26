# FOUQRA - Sistem Manajemen Santri 📘

FOUQRA adalah aplikasi web sederhana untuk mengelola data santri seperti nama, progres ngaji, dan absensi. Project ini dibuat menggunakan teknologi frontend modern dan terintegrasi dengan Firebase sebagai backend.

---

## 🚀 Fitur Utama

* 📋 Tambah data santri
* 📊 Monitoring progres (halaman, surat)
* ✅ Tracking absensi
* 🔄 Data realtime (Firestore)
* 🌐 Deploy online (Vercel)

---

## 🛠️ Teknologi yang Digunakan

* HTML, Tailwind CSS
* Alpine.js
* Firebase Firestore (Database)
* Vercel (Hosting)

---

## 📁 Struktur Project

```
/project
 ├── index.html
 ├── admin.html
 ├── firebase.js
 ├── script.js
 └── assets/
```

---

## ⚙️ Setup Project

### 1. Clone Repository

```
git clone https://github.com/username/fouqra.git
cd fouqra
```

### 2. Setup Firebase

* Buat project di Firebase Console
* Aktifkan Firestore Database
* Ambil config Firebase
* Masukkan ke file `firebase.js`

Contoh:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

---

### 3. Jalankan Project

Buka langsung `index.html` di browser

atau pakai live server di VS Code

---

## 🌍 Deploy

### Menggunakan Vercel

1. Push project ke GitHub
2. Login ke [https://vercel.com](https://vercel.com)
3. Import repository
4. Klik Deploy

---

## ⚠️ Catatan

* Upload foto belum diaktifkan (masih fokus database)
* Gunakan Firestore rules terbuka hanya untuk development

---

## 🔮 Rencana Pengembangan

* 📸 Upload foto santri
* 📱 UI lebih responsif

---

## 👨‍💻 Author

Project ini dibuat untuk kebutuhan manajemen santri ngaji.

---

## ⭐ Support

Kalau project ini membantu, jangan lupa kasih ⭐ di GitHub ya!
