import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";

export default function NewsPopup({text} : { text: string }) {
  const [data, setData] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        setData(res);
        console.log("Data received:", res);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, [apiUrl]); // 👈 empty deps = run only once on mount

  return (
    <Dialog>
      <DialogTrigger>{text}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            {typeof data === "string" ? data : JSON.stringify(data, null, 2)}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
