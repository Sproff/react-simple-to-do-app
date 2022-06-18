const Hero = () => {
  return (
    <div className="form-container">
      <div>
        <h2>Add task</h2>
        <form>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export { Hero };
