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

## 📂 Deployement Link

coming soon ....
---

## 🧪 Technologies Used

| Tool/Library          | Purpose                              |
|-----------------------|--------------------------------------|
| **React 18+**         | UI rendering                         |
| **TypeScript**        | Type safety                          |
| **React Router DOM**  | Routing between form and result      |
| **Framer Motion**     | Smooth animation for slider/emoji    |
| **Tailwind CSS**      | Utility-first modern styling         |
| **Shadcn UI**         | Modern styling                       |
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

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/feedback-validator.git
cd feedback-validator
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Start the development server

```bash
npm run dev
```
App will be available at: http://localhost:5173

## 🔍 Folder Details

| Folder/File                  | Description                                         |
|-----------------------------|-----------------------------------------------------|
| `FeedbackForm.tsx`          | Handles feedback input, validation & submission     |
| `SentimentAnalyser.tsx`     | Consumes message, runs sentiment, shows results     |
| `SentimentAnalyserSlider.tsx` | Animated slider UI with emoji label               |
| `sentimentAnalyser.ts`      | Exports `analyzeText(text: string)` function        |
| `App.tsx`                   | Wraps routes and theme provider                     |

---

## 🧩 Future Improvements

- 🧠 Use a more advanced NLP model (like OpenAI or VADER)
- 📤 Save feedback to a database
- 📊 Dashboard for tracking sentiment over time
- 🔒 Authentication for feedback submission
- 📱 Mobile-first enhancements

---

## 🧑‍💻 Author

Made with ❤️ by **Anjana Kumari**  
📧 anjanasingh1257@gmail.com  
🔗 [LinkedIn](#) • [GitHub](#)

---

## 📄 License

**MIT License**  
Free for personal and commercial use.
