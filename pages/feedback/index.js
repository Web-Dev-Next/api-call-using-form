import { getDataOf, getFilePath } from "../helper/util";
function Feedback(props) {
  return (
    <div>
      <ul>
        {props.feedbacks.map((f) => (
          <li key={f.id}>{f.message}</li>
        ))}
      </ul>
    </div>
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
