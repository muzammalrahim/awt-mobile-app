import React, { useEffect, useState } from "react";
import { Button, Option, Select, Textarea } from "@material-tailwind/react";
import useAddReview from "../apiHooks/complain/useAddReview";

const Feedback = ({ complainId, userId, handleCloseDialog }) => {
  const [feedback, setFeedback] = useState("");
  const [description, setDescription] = useState("");
  const addReview = useAddReview();
  const handleSubmit = async (complainId, userId, e) => {
    e.preventDefault();

    console.log("Handle Submit Rendering");
    const currentDate = new Date();
    const date = currentDate.toDateString();
    const check = await addReview({
      date,
      complainId,
      userId,
      description,
      feedback,
    });
    if (check) {
      handleCloseDialog();
      return;
    }
    // console.log(complainId, userId)
  };

  const handleFeedback = (e) => {
    setFeedback(e);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(complainId, userId, e)}>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Feedback:"
          size="lg"
          style={{
            height: "100px",
            resize: "vertical",
          }}
        />
        <div className="mb-3">
          <Select label="Are you" value={feedback} onChange={handleFeedback}>
            <Option value="satisfied">Satisfied</Option>
            <Option value="notSatisfied">Not Satisfied</Option>
          </Select>
        </div>
        <div className="flex gap-5 justify-center">
          <Button className="bg-[#16A085]" onClick={() => handleCloseDialog()}>
            Cancel
          </Button>
          <Button className="bg-[#16A085]" type="submit ">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Feedback;
