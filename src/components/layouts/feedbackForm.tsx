import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import FeedbackAnimation from "@/assets/lottie/feedbackAnimation.json";
import Lottie from "lottie-react";


export default function FeedbackForm() {
  return (
    <div className="w-full px-6 lg:px-16 py-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

        {/* Feedback Form */}
        <div className="w-full lg:max-w-xl">
          <form className="space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl h-full">
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 text-center">
              Share your Feedback
            </h2>

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

        {/* Lottie Animation */}
        <div className="w-full lg:w-[50%] flex justify-center items-stretch">
          <div className="w-full max-w-[600px] h-[470px]">
            <Lottie
              animationData={FeedbackAnimation}
              loop
              style={{ height: "100%", width: "100%" }}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
