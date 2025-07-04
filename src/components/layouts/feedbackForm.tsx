import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import FeedbackAnimation from "@/assets/lottie/feedbackAnimation.json";
import Lottie from "lottie-react";


export default function FeedbackForm() {
  return (
    <div>
      <div>
         <Lottie animationData={FeedbackAnimation} loop={true} />
      </div>

    <form className="max-w-xl mx-auto space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg mt-15">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 text-center">Share your Feedback</h2>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Your Name</label>
        <Input type="text" placeholder="Enter your name" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
        <Input type="email" placeholder="Enter your email" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Your Feedback</label>
        <Textarea placeholder="Share your thoughts..." />
      </div>

      <Button type="submit" className="w-full mt-4">
        Submit Feedback
      </Button>
    </form>
    </div>
  )
}
