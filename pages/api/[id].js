import { getDataOf, getFilePath } from "../helper/util";

function SelectedFeedback(req, res) {
  const id = req.query.id;
  const filePath = getFilePath();
  const data = getDataOf(filePath);
  const selectedFeedback = data.find((f) => f.id === id);
  res.status(200).json({ feedback: selectedFeedback });
}

export default SelectedFeedback;
