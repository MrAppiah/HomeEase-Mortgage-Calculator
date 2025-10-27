<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# 🏡 HomeEase – Mortgage Calculator & Dashboard

**HomeEase** is a responsive **React + TypeScript** web application designed to simplify mortgage estimation and visualisation.  
Users can input financial details, instantly view monthly repayments, and see a clear breakdown of **principal vs. interest** through an interactive dashboard.

---

## ✨ Features

- 💰 **Interactive Mortgage Calculator** – Instantly calculates monthly payments based on property price, deposit, term, and interest rate.  
- 📊 **Visual Dashboard** – Displays a dynamic **pie chart** of principal vs. total interest using Recharts.  
- 🧠 **Smart Global State Management** – Built with React Context and a custom hook (`useMortgage`).  
- 📱 **Responsive Design** – Fully optimised for both mobile and desktop layouts via Tailwind CSS.  
- ⚡ **Fast + Type-Safe** – Powered by Vite and TypeScript for speed and developer confidence.

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend Framework** | React 19 (Vite + TypeScript) |
| **Routing** | React Router v7 |
| **Styling** | Tailwind CSS 3 |
| **Charts** | Recharts |
| **State Management** | React Context API |
| **Build Tool** | Vite |

---

## ⚙️ Installation & Setup


### 1️⃣ Clone the repository

git clone https://github.com/MrAppiah/homeease-mortgage-calculator.git

cd homeease-mortgage-calculator

### 2️⃣ Install dependencies
npm install

### 3️⃣ Start the development server
npm run dev
Then open http://localhost:5173/ in your browser.

### 4️⃣ Build for production
npm run build


---

## 🧠 Project Structure
```bash
src/
├── components/
│ ├── MortgageCalculator.tsx # Calculator form and logic
│ └── MortgageDashboard.tsx # Visualization and summary
│
├── context/
│ └── MortgageContext.tsx # Global mortgage state provider
│
├── hooks/
│ └── useMortgage.tsx # Custom React hook for context access
│
├── App.tsx # App layout, navbar, and routes
├── index.tsx # Entry point with BrowserRouter
└── index.css # Tailwind global styles
 ```

---

## 📸 Screenshots

| Calculator | Dashboard |
|-------------|------------|
| ![Mortgage Calculator Screenshot](./assets/calculator.png) | ![Mortgage Dashboard Screenshot](./assets/dashboard.png) |


---

## 💡 Key Highlights

- Implemented **global mortgage state** using React Context + custom hooks.  
- Built a clean, **fully responsive UI** with Tailwind CSS.  
- Created interactive **data visualization** using Recharts.  
- Applied **modern React best practices** (functional components, hooks, and context).  
- Used **TypeScript** to ensure strong typing and maintainable code.

---

## 🎯 Learning Outcomes

- Strengthened understanding of **React state management** patterns.  
- Practiced **type-safe development** with TypeScript.  
- Enhanced skills in **UI/UX design** with Tailwind and responsive layout building.  
- Gained experience integrating **data visualization libraries** in React apps.  

---

## 👨‍💻 Author

**Emmanuel Appiah**  
Frontend Developer | React | TypeScript | UI/UX  
[💼 LinkedIn](https://www.linkedin.com/in/mrappiah/)

---

## 🪪 License
This project is open-source under the **MIT License**.



>>>>>>> fe3e548da326499e0bbd69e739120e5210ac07cf
