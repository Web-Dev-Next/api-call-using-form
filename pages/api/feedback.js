import fs from "fs";
import { getDataOf, getFilePath } from "../helper/util";

function Feedback(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const message = req.body.message;

    const feedbackData = {
      id: new Date().toISOString(),
      email: email,
      message: message,
    };

    const filePath = getFilePath();
    const data = getDataOf(filePath);

    data.push(feedbackData);

    const jsonData = JSON.stringify(data);
    fs.writeFileSync(filePath, jsonData);

    res.status(201).json({ message: "Success!" });
  } else {
    const filePath = getFilePath();
    const data = getDataOf(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default Feedback;
