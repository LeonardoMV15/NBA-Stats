import { Link } from "react-router-dom";
import "../styles/not-found.css";

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">
        Im sorry, looks like this page doesn&apos;t exist
      </h1>
      <Link className="not-found__button" to="/">
        Return to Home
      </Link>
    </main>
  );
}

export default NotFound