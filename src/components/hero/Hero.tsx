import { useState } from "react";
import { toast } from "react-toastify";
import { postData } from "../../queries/auth";

const Hero = () => {
  const initialData = Object.freeze({
    title: "",
    body: "",
  });
  const [task, setTask] = useState<object>(initialData);

  const addData = async () => {
    try {
      const res = await postData(task);
      toast.success("Task submitted successfully");
      console.log(res);
    } catch (error) {
      toast.error("Sorry, an error occured. Try again later!");
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setTask({ ...task });

    addData();
  };

  return (
    <div className="form-container">
      <div>
        <h2>Add task</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <br />
            <input
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              type="text"
              className="form-control"
              id="title"
              name="title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Description</label>
            <br />
            <input
              onChange={(e) => setTask({ ...task, body: e.target.value })}
              type="text"
              className="form-control"
              id="description"
              name="description"
              required
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export { Hero };
