import { Fragment } from "react";
import { useRef, useState } from "react";
// import { getDataOf, getFilePath } from "./helper/util";

export default function Home(props) {
  const [feedbackData, SetFeedbackData] = useState([]);

  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;

    const data = {
      email: email,
      message: message,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function onLoadFeedBack() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        SetFeedbackData(data.feedback);
      });
  }

  return (
    <Fragment>
      <h1>Feedback Form</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="user@gmail.com"
            ref={emailInputRef}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Type Your Message Here..."
            rows="5"
            ref={messageInputRef}
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
      <div>
        <hr />
        <button onClick={onLoadFeedBack}>Load Feedback</button>
        <hr />
        <ul>
          {feedbackData.map((feedback) => (
            <li key={feedback.id}>{feedback.message}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

// export async function getStaticProps(context) {
//   const filePath = getFilePath();
//   const data = getDataOf(filePath);
//   if (!data) {
//     return { notFound: true };
//   }
//   return {
//     props: {
//       feedbacks: data,
//     },
//   };
// }
