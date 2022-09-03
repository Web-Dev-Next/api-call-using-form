import { Fragment, useState } from "react";
import { getDataOf, getFilePath } from "../helper/util";

function Feedback(props) {
  const [feedbackData, showFeedbackData] = useState();

  function onClickShowMore(id) {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        showFeedbackData(data.feedback);
      });
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbacks.map((f) => (
          <div>
            <li key={f.id}>{f.message}</li>
            <br />
            <button onClick={onClickShowMore.bind(null, f.id)}>
              Show more
            </button>
          </div>
        ))}
      </ul>
    </Fragment>
  );
}

export default Feedback;

export async function getStaticProps(context) {
  const filePath = getFilePath();
  const data = getDataOf(filePath);

  return {
    props: {
      feedbacks: data,
    },
  };
}
