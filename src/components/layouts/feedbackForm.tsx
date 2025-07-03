export default function FeedbackForm(){
    return(
        <>
            <form>
                <label>Your name</label>
                <input type="text"/>
                <label>Email</label>
                <input type="email"></input>
                <label>Your feedback</label>
                <input type="textarea"></input>
            </form>
        </>
    )
}