import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

import { useState, useEffect } from "react";

export default function NewsPopup({text} : { text: string }) {
  const [data, setData] = useState("");
  const [urlToImage, seturlToImage] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        // setData(res);
        console.log(res);
        console.log("Data received:", res.articles[0].description);
        setData(res.articles[0].description)
        seturlToImage(res.articles[0].urlToImage);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, [apiUrl]); 

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black border border-gray-300 hover:bg-gray-100 shadow-sm">
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Please read the news below</DialogTitle>
          <DialogDescription className="whitespace-pre-wrap">
            <img src= {urlToImage} alt="image"/>
           
            {/* {typeof data === "string" ? data : JSON.stringify(data, null, 2)} */}
            {data}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
