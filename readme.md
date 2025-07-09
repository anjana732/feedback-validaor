# 🧠 Feedback Validator

A professional and interactive React application that collects user feedback, analyzes its sentiment using `sentiment` AI, and visually displays the result using an animated sentiment slider with emoji indicators.

---

## 🚀 Features

- ✍️ **Feedback Collection Form** with guided input tour
- 🎯 **Real-time Sentiment Analysis** using `sentiment` package
- 🌡️ **Visual Sentiment Slider** with gradient fill and animated emoji pointer
- 📊 Clean display of **score, comparative score, positive/negative words**
- 💡 **React Router**-based multi-page navigation
- 🎨 Fully styled with **Tailwind CSS**, supports dark mode
- 📱 Responsive and elegant UI

---

## 📂 Project Structure


---

## 🧪 Technologies Used

| Tool/Library          | Purpose                              |
|-----------------------|--------------------------------------|
| **React 18+**         | UI rendering                         |
| **TypeScript**        | Type safety                          |
| **React Router DOM**  | Routing between form and result      |
| **Framer Motion**     | Smooth animation for slider/emoji    |
| **Tailwind CSS**      | Utility-first modern styling         |
| **@reactour/tour**    | User onboarding form tour            |
| **Sentiment**         | Natural language sentiment scoring   |
| **Lottie React**      | Feedback form animation              |

---

## 🧠 How Sentiment Analysis Works

The app uses [`sentiment`](https://www.npmjs.com/package/sentiment), a simple Node.js module, to compute:

- `score`: Total sentiment score (range: -5 to +5)
- `comparative`: Score normalized by input length
- `positive`: Array of positive words detected
- `negative`: Array of negative words detected

This is visualized on a slider with color-coded feedback:

| Score Range   | Emoji  | Color          |
|---------------|--------|----------------|
| -5 to -4      | 😠      | Red            |
| -3 to -1      | 😢      | Orange         |
|  0            | 😐      | Yellow         |
|  1 to 3       | 🙂      | Lime           |
|  4 to 5       | 😄      | Green          |

---

## 📸 Screenshots

> Add screenshots here of:
> - Feedback Form UI
> - Slider animation
> - Result with score breakdown

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/feedback-validator.git
cd feedback-validator
