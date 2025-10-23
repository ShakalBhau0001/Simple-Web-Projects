# 🧭 Simple Sidebar Using HTML & CSS

A clean and minimal **collapsible sidebar navigation** built only with **HTML** and **CSS**, without any JavaScript!  
It uses the `<details>` and `<summary>` HTML tags to create a smooth toggle effect for the sidebar menu.

---

## ✨ Features
- 💡 100% HTML + CSS only (no JS)
- 📱 Responsive and minimal design
- 🎛️ Smooth open/close animation
- 🧱 Simple and lightweight structure
- 🖱️ Hover effects on menu items

---

## 🗂️ Project Structure
```
Simple-Sidebar/
│
├── index.html     # Main HTML structure
├── style.css      # Sidebar styling and transitions
└── README.md      # Project documentation file
```

---

## 💻 How It Works
- The sidebar is created using the `<details>` element.
- The `<summary>` tag acts as the **hamburger button (☰)**.
- When you click it, the sidebar expands to show a list of links (`<ul><li>` items).
- CSS transitions handle the smooth width expansion and hover effects.

---

## 🧩 Code Explanation

### HTML Highlights
```html
<details>
  <summary>&#9776;</summary>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</details>
```
✅ `<details>` = collapsible container  
✅ `<summary>` = toggle button (hamburger icon)  
✅ `<ul>` = menu list  

---

### CSS Highlights
```css
details {
  width: 220px;
  border: 1px solid #333;
  border-radius: 6px;
  transition: width 0.3s ease;
}
details:not([open]) {
  width: 60px;
}
```
✅ Sidebar expands when open  
✅ Shrinks to icon width when closed  
✅ Subtle background + hover styling for better UI  

---

## 🚀 How to Run
1. Download or clone the repository.  
2. Open `index.html` in any browser.  
3. Click on the ☰ icon to open or close the sidebar.  

---

## 🧠 Author
**Shakal Bhau**  
A simple and elegant demo of a responsive sidebar using only HTML & CSS.

---

## 📜 License
This project is **open-source** and available for personal or educational use.
