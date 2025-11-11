# 🔐 Password Generator

A sleek, modern **Password Generator** built using **HTML**, **CSS**,
and **JavaScript** --- designed to create strong, secure, and
customizable passwords automatically every 10 seconds.

![Password Generator
Preview](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)\
![HTML](https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5)\
![CSS](https://img.shields.io/badge/CSS-blue?style=for-the-badge&logo=css3)\
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript)

------------------------------------------------------------------------

## 🚀 Features

-   ✅ **Customizable Options**
    -   Toggle **Lowercase**, **Uppercase**, **Numbers**, and
        **Symbols**
-   🔢 **Adjustable Length**
    -   Choose password length (6--64 characters)
-   ⚡ **Instant Generation**
    -   Generates a new password instantly with one click
-   🔁 **Auto-Refresh**
    -   Automatically generates a new password every 10 seconds
-   📋 **Copy Feature**
    -   Copy the generated password to your clipboard easily
-   🌙 **Modern Neon Design**
    -   A dark, glowing UI for a hacker-style look 👾

------------------------------------------------------------------------

## 🧠 How It Works

The app uses JavaScript's **`window.crypto.getRandomValues()`** to
ensure **true randomness**, making your generated passwords **secure and
unpredictable**.

The selected character sets (based on checkbox options) are combined,
and a random character is picked for each position in the password.

------------------------------------------------------------------------

## 🛠️ Tech Stack

  Component   Technology
  ----------- -------------------------
  Structure   HTML5
  Styling     CSS3 (Neon Theme)
  Logic       JavaScript (Vanilla JS)
  Security    Crypto API

------------------------------------------------------------------------

## 🧩 File Structure

    Password-Generator/
    │
    ├── index.html      # Main UI
    ├── style.css       # Styling & Layout
    ├── script.js       # Password generation logic
    └── README.md       # Project documentation file

------------------------------------------------------------------------

## ⚙️ Usage

1.  Clone or download the repository

    ``` bash
    git clone https://github.com/ShakalBhau0001/Simple-Web-Projects.git
    cd Password-Generator
    ```

2.  Open **index.html** in any modern browser.
3.  Choose your options and click **Generate**.
4.  Click **Copy** to save the password.
5.  Sit back --- it auto-generates every 10 seconds ⏱️

------------------------------------------------------------------------

## 🔒 Example Output

    Wb@3kL!x2$Pq

------------------------------------------------------------------------

## 💡 Future Enhancements

-   Add **password strength meter**\
-   Option to **exclude similar characters** (e.g., `O` vs `0`)\
-   Add **dark/light theme toggle**

------------------------------------------------------------------------

## 🧑‍💻 Author

**👤 [ShakalBhau0001](https://github.com/ShakalBhau0001)**\
💬 "Creating secure tools, one project at a time."

------------------------------------------------------------------------

## 📜 License

This project is licensed under the **MIT License** --- free to use,
modify, and share.
