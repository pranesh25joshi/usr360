# 🛰️ usr360 — Universal Social Reconnaissance

> **Track down social media usernames across 400+ platforms**  
> A powerful, open-source username reconnaissance tool for the modern web.

---

## 🔍 What is usr360?

**usr360** is a web-based OSINT tool that scans for a given username across hundreds of websites — including social platforms, developer networks, forums, and more.

It gives you a 360° view of where a digital identity exists, making it perfect for:

- 🕵️ OSINT analysts & researchers  
- 🔐 Cybersecurity professionals  
- 📣 Brand managers & influencers  
- 🧠 Curious humans

---

## 💡 Features

- 🔎 Search for a username across 400+ popular platforms  
- 🧭 Displays confirmed platforms the username exists on  
- ⚡ Ultra-fast concurrent scanning using `Promise.all` and Axios  
- 🌐 Clickable profile links  
- ✅ Clean, minimal React-based UI  
- 🔌 Lightweight REST API backend

---

## ⚙️ Tech Stack

- **Frontend**: React + Next.js (App Router)
- **Backend**: Node.js (API Routes)
- **HTTP Requests**: Axios  
- **Username Source**: Custom curated dataset of over 400 social networks

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/usr360.git
cd usr360
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📡 API Usage

### `POST /api/check`

**Request Body:**

```json
{
  "username": "elonmusk"
}
```

**Response:**

```json
{
  "available": [
    {
      "siteName": "Twitter",
      "available": true,
      "url": "https://twitter.com/elonmusk"
    }
    // ...
  ]
}
```

---

## 🧪 Use Cases

- ✅ Check username availability before registering  
- 👮 Investigate impersonators or fake profiles  
- 🔍 Perform digital footprint analysis  
- 🧱 Build tools that map online identity presence

---

## ⚠️ Disclaimer

This tool is meant strictly for **ethical, research, and educational purposes**.  
Misuse of this tool for unethical tracking or harassment is strictly prohibited.  
Please respect user privacy and platform policies.

---

## 🧭 Roadmap

- [ ] Dark web profile scanning (.onion URLs)  
- [ ] Historical username monitoring  
- [ ] Email footprint mapping  
- [ ] Job post tracking by company (LinkedIn, Hacker News)  
- [ ] Profile activity alert system

---

## 👨‍💻 Maintainer

Built with passion by **Young Master (Pranesh Joshi)**  
Full-stack hacker • OSINT explorer • Builder @ Bhopal DAO

---

## ✨ Support & Contribute

If you love this project:

- ⭐ Star it on GitHub  
- 🐦 Tweet it with `#usr360`  
- 🔧 Submit issues or pull requests to help improve it
