import { useState } from "react";
import FeedbackForm from "../layouts/feedbackForm";
import Header from "../layouts/header";
import NewsPopup from "../layouts/newsPopup";

export default function Homepage(){
    const [getNewsButtonClick, setGetNewsButtonClick] = useState(false);

    return(
        <>
            <NewsPopup/>
            <Header onAction={()=>setGetNewsButtonClick(true)}/>
            <FeedbackForm/>
        </>
    )
}