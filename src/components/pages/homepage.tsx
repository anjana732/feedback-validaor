import { useState } from "react";
import FeedbackForm from "../layouts/feedbackForm";
import Header from "../layouts/header";


export default function Homepage(){
    const [getNewsButtonClick, setGetNewsButtonClick] = useState(false);

    return(
        <>
            
            <Header/>
            <FeedbackForm/>
            {/* {getNewsButtonClick && <NewsPopup/>} */}
        </>
    )
}