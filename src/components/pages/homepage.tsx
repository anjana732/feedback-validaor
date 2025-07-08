import { useState } from "react";
import FeedbackForm from "../layouts/FeedbackForm";
import Header from "../layouts/Header";


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