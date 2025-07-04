import { Button } from "../ui/button";

export default function Header(){
     return (
    <div className="flex items-center justify-center gap-4 py-6 px-4 text-gray-800 font-medium text-lg">
      <p className="whitespace-nowrap">Click the button next to get insight for feedback.</p>
      <Button className="text-base px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm">
        Get Insight
      </Button>
    </div>
  );
}