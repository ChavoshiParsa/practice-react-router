import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Home page</h1>
      <p>
        Go to <Link to="products">Products Page</Link>
      </p>
      <button
        onClick={() => {
          navigate("products");
        }}
      >
        Navigate
      </button>
    </>
  );
}
