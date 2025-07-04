import { Button } from "../ui/button";

export default function Header(){
     return (
     <div className="w-full px-8 py-6 flex items-center gap-6">
      <p className="text-white text-3xl font-semibold">
        Click the button next to get insight for feedback.
      </p>
      <Button >
        Get Insight
      </Button>
    </div>
  );
}