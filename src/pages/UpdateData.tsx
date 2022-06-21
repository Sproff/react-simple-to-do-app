import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MainLayout } from "../layouts/MainLayout";
import { getSingleData, updateData } from "../queries/auth";

const UpdateData = () => {
  const [task, setTask] = useState<any>([]);
  const { id } = useParams();

  const convertToNumber = Number(id);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleData(convertToNumber);
        setTask(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [convertToNumber]);

  const onUpdate = async () => {
    try {
      const res = await updateData(convertToNumber);
      console.log(res);
      toast.success("Task updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Sorry, an error occured. Try again later!");
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setTask({ ...task });
    console.log(task);

    onUpdate();
  };

  return (
    <MainLayout>
      <div className="form-container">
        <h2>Edit Task</h2>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">ID</label>
            <br />
            <input
              onChange={(e) => setTask({ ...task, id: e.target.value })}
              defaultValue={id}
              type="text"
              className="form-control"
              id="id"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <br />
            <input
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              defaultValue={task.title}
              type="text"
              className="form-control"
              id="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Description</label>
            <br />
            <input
              onChange={(e) => setTask({ ...task, body: e.target.value })}
              defaultValue={task.body}
              type="text"
              className="form-control"
              id="body"
            />
          </div>

          <button type="submit" className="btn">
            Update Task
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export { UpdateData };
