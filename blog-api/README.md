# 📘 Blog Management RESTful API

RESTful API ini dibangun dengan **Node.js**, **Express**, dan **MongoDB** untuk mengelola artikel blog dan kategori. Fitur utama mencakup CRUD, pencarian berdasarkan kategori, dan pagination.

---

## 🚀 Fitur Utama

- CRUD untuk Artikel
- CRUD untuk Kategori
- Pencarian Artikel berdasarkan Kategori
- Pagination untuk daftar Artikel
- Validasi input
- Struktur RESTful API

---

## 📦 Teknologi

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- Dotenv
- CORS
- Express Validator
- JSON Web Token (optional)
- Nodemon (development)

---

## ⚙️ Cara Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/username/blog-api.git
cd blog-api

2. Install Dependencies

npm install

3. Setup Environment (.env)
Untuk konfigurasi environment, buat file .env di root proyek dengan cara:

💻 Di Linux / macOS
cp .env.example .env

🪟 Di Windows (Manual)
Buat file baru bernama .env

Salin isi dari .env.example

Ganti bagian <username> dan <password> pada MONGODB_URI

4.  Setup MongoDB Atlas
🔹 Opsi 1: MongoDB Atlas (Cloud)
-Kunjungi MongoDB Atlas dan buat akun (jika belum).
-Buat Shared Cluster (Free Tier).
-Di bagian Database Access, buat user dengan username & password.
-Di bagian Network Access, whitelist IP:
0.0.0.0/0
-Salin connection string dari menu:

Database > Connect > Connect your application
Contoh:
mongodb+srv://<username>:<password>@cluster0.mongodb.net/blogdb?retryWrites=true&w=majority

-Ganti MONGODB_URI di file .env Anda dengan string tersebut.

Opsi 2: MongoDB Lokal
Install MongoDB di https://www.mongodb.com/try/download/community

Jalankan MongoDB di komputer Anda (biasanya port default 27017)

Gunakan URI berikut di .env:

MONGODB_URI=mongodb://localhost:27017/blogdb
Catatan: Database blogdb dan koleksi (articles, categories) akan dibuat otomatis saat API digunakan pertama kali.

5. ▶️ Menjalankan Server
npm run dev

6. 📬 Postman Collection

🔧 Cara Menggunakan:
-Buka aplikasi Postman

-Klik Import

-pilih file blog-api.postman_collection.json

-Jalankan request sesuai endpoint yang tersedia

7. 🧪 Testing API
Gunakan Postman, Insomnia, atau REST Client untuk mengetes setiap endpoint. Pastikan MongoDB Atlas sudah terhubung dan server sudah berjalan.
