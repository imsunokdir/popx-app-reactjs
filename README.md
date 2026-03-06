# PopX App — React + Tailwind CSS Assignment

A multi-screen mobile-first web app built with React and Tailwind CSS, based on a provided Adobe XD design.

## 🔗 Live Demo
[popx-app-assignment.vercel.app](https://popx-app-reactjs.vercel.app/)

## 📱 Screens
- **Welcome** — Landing screen with navigation to Login or Register
- **Login** — Email & password validation, button enables only when form is valid
- **Register** — Full registration form with required field indicators
- **Account Settings** — Profile view with avatar and user details

## 🛠 Tech Stack
- **React** — UI library
- **Tailwind CSS v4** — Styling
- **React Router DOM** — Client-side routing
- **Vite** — Build tool

## 📐 Design
Designed in Adobe XD. The app is fully responsive:
- On **mobile screens** → full screen layout like a native app
- On **desktop screens** → centered mobile mockup with shadow

## 🚀 Getting Started

### Installation
```bash
git clone https://github.com/yourusername/popx-app-assignment.git
cd popx-app-reactjs
npm install
```

### Run locally
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## 📁 Project Structure
```
src/
├── components/
│   └── MobileLayout.jsx      # Mobile frame wrapper
├── pages/
│   ├── PopXWelcome.jsx        # Welcome screen
│   ├── Login.jsx              # Login screen
│   ├── Register.jsx           # Register screen
│   └── AccountSettings.jsx    # Account settings screen
├── App.jsx                    # Routes
├── main.jsx                   # Entry point
└── index.css                  # Global styles & CSS variables
```

## 🔄 App Flow
```
Welcome
  ├── Create Account → Register → Login → Account Settings
  └── Already Registered? Login → Login → Account Settings
```
