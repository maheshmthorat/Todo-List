# 📝 React Todo List App

This is a simple and responsive **Todo List application** built using **React**. It allows users to:

* Add tasks with priority levels
* Mark tasks as completed
* Filter tasks (All / Active / Completed)
* Clear completed tasks
* Store tasks in the browser using `localStorage` (no backend or database needed)

---

## 🛠️ Features

* ✅ Add new tasks
* ✅ Assign task priority (High / Medium / Low)
* ✅ Toggle task completion
* ✅ Filter view by task status
* ✅ Clear completed tasks
* ✅ Tasks saved in browser using `localStorage`
* ✅ Responsive and clean UI

---

## 🧩 Tech Stack

* **React**
* **HTML5 / CSS3**
* **Bootstrap / Custom Styling**
* **localStorage API**

---

## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed on your system.

### Installation

1. **Clone the repo:**

```bash
git clone https://github.com/maheshmthorat/Todo-List.git
cd Todo-List
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the app locally:**

```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

## 📁 Project Structure

```
todo-list/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── data.json
├── package.json
└── README.md
```

---

## 📦 localStorage Behavior

All tasks are saved to your browser's `localStorage`. This means:

* Your tasks will persist across page reloads.
* Clearing browser data or using incognito mode will reset the list.

---

## ✨ Future Improvements

* ✏️ Edit task functionality
* 📅 Due date for tasks
* ☁️ Sync with backend (Node.js + MySQL)
* 🌓 Light/Dark theme toggle

---

## 📝 License

MIT License – Feel free to use and customize this for your own projects!
