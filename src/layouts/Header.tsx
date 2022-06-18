import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="layout">
      <Link to="/">
        <p>Simple To-do App</p>
      </Link>
    </div>
  );
};

export { Header };
