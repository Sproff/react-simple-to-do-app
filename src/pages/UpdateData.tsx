import { MainLayout } from "../layouts/MainLayout";

const UpdateData = () => {
  return (
    <MainLayout>
      <div className="form-container">
        <h2>Edit Task</h2>

        <form>
          <div className="form-group">
            <label htmlFor="title">ID</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <br />
            <input
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
              type="text"
              className="form-control"
              id="description"
              name="description"
              required
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
