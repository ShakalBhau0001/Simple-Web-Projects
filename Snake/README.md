# 🐍 Snake Game

A simple, visually appealing **Snake Game** built using **HTML, CSS, and JavaScript**.  
This version features a **plain green background**, **score tracking**, **high score**, and a **game title** displayed at the top-left corner.

---

## 🎮 Features

- Classic **Snake gameplay** with smooth movement.
- **Score** and **HiScore** tracking.
- Game **title displayed top-left** with scores underneath.
- **Responsive game board** that works on most screen sizes.
- **Animated food** for a fun visual effect.
- Easy customization for background, speed, and grid size.

---

## 📂 Project Structure

```
Snake/
│
│── index.html           # Main HTML file
│
├── css/
│   └── style.css        # Game styling
├── js/
│   └── index.js         # Game logic
├── music/               # Optional sound effects
│   ├── food.mp3
│   ├── gameover.mp3
│   ├── move.mp3
│   └── music.mp3
└── README.md            # Project documentation

```

---

## 🛠️ How to Run

1. Clone the repository:

```bash
git clone https://github.com/ShakalBhau0001/Simple-Web-Projects.git
cd Snake
```

2. Open `index.html` in any modern browser (Chrome, Edge, Firefox).

3. Control the snake using Arrow keys:
- `Arrow Up` – Move Up
- `Arrow Down` – Move Down
- `Arrow Left` – Move Left
- `Arrow Right` – Move Right

4. Eat the food to increase your score.
5. Avoid walls and your own tail to stay alive.

---

## 🔊 Optional Sounds

To enable sound effects:

1. Place these files inside the `music/` folder:
```arduino
food.mp3
gameover.mp3
move.mp3
music.mp3
```

2. The game automatically loads the sounds if found in the folder.

---

## 🎨 Customization
- **Background Color**: Edit `style.css`:
  ```css
  body {
    background-color: #4CAF50; /* Change to any color */
  }
  ```

- **Board Size**: Edit `style.css`:
  ```css
  #board {
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(18, 1fr);
  }
  ```

 - **Snake Speed**: Edit `index.js`:
    ```js
    let speed = 10; // Higher = faster, Lower = slower
    ```

---

## ⚠️ Disclaimer

This game is for **educational and personal use only.**
Do not use copyrighted assets (like sounds or images) without permission.

---

## 🧑‍💻 Author

**Developed by:** [Shakal Bhau ❤️]  

**GitHub:** [github.com/ShakalBhau0001](https://github.com/ShakalBhau0001)

💻 Built with ❤️ using **HTML** + **CSS** + **JavaScript**

---
