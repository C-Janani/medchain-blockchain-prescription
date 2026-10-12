# 🏥 MedChain – Blockchain-Based Medical Prescription System

A secure, tamper-proof medical prescription platform where doctors, patients, pharmacies and admins work together using blockchain-style hash chaining, QR verification and AI-assisted safety features.

## 🌐 Live Links

| Component | Platform | Link |
|-----------|----------|------|
| Frontend | Vercel | [medchain-blockchain-prescription.vercel.app](https://medchain-blockchain-prescription.vercel.app) |
| Backend API | Render | [medchain-ndzz.onrender.com](https://medchain-ndzz.onrender.com) |

> ⏳ The backend is hosted on a free tier, so the first request may take 30–60 seconds while the server wakes up.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://medchain-blockchain-prescription.vercel.app)

## 📌 About the Project

Paper prescriptions suffer from forgery, duplicate use, illegible handwriting and medicine misuse. MedChain addresses these problems by storing every prescription using chained hashing, so any modification to a record immediately breaks the chain and is detected.

## 👥 User Roles

- **Doctor** – Creates prescriptions using templates, autocomplete and voice dictation
- **Patient** – Views prescriptions, receives medicine reminders and plain-language explanations (English / Tamil)
- **Pharmacy** – Scans QR codes to verify and dispense prescriptions
- **Admin** – Manages users, records and system monitoring

## ✨ Features

### Core
- Role-based dashboards (Doctor, Patient, Pharmacy, Admin)
- Blockchain-style chained hashing for prescription integrity
- QR code generation and scanning
- Glassmorphism / Material Design 3 user interface

### AI & Security Features
- 💊 Drug interaction checker
- ⚠️ Allergy and dosage validator
- 📝 Prescription templates and autocomplete
- 🎙️ Voice dictation for doctors
- ⏰ Medicine reminders and adherence tracker
- 🗣️ Plain-language explainer with English / Tamil toggle
- 🔗 Chain integrity verifier
- 🚨 Fraud / anomaly risk score

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Security | Hash chaining (blockchain simulation), QR verification |
| Deployment | Vercel (frontend), Render (backend) |

## 📂 Project Structure

```
medchain-blockchain-prescription/
├── index.html
├── css/
├── js/
│   ├── api.js
│   ├── doctor/
│   └── ...
├── rxchain-backend/      # Node.js + Express + MongoDB API
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/C-Janani/medchain-blockchain-prescription.git
cd medchain-blockchain-prescription
```

### 2. Start the backend
```bash
cd rxchain-backend
npm install
npm start
```
Create a `.env` file inside `rxchain-backend` and set `MONGO_URI` and `JWT_SECRET`.

### 3. Run the frontend
Open `index.html` in your browser, or use the VS Code Live Server extension.

> In local development the API base URL is `http://localhost:5000/api`. In production it automatically uses `https://medchain-ndzz.onrender.com/api`.

## 🔐 How the Blockchain Works

Each prescription stores its own hash along with the hash of the previous prescription. If any record is altered, its hash changes and every block after it no longer matches. The **Chain Integrity Verifier** detects this mismatch and highlights the tampered record.

## 👩‍💻 Team

**III Year B.Tech CSE, Sri Manakula Vinayagar Engineering College (SMVEC), Puducherry**

- Suhasini P
- Janani C
- Lakshmidevi K

## 📄 License

This project was developed for academic purposes.
