import { Link } from "@tanstack/react-router";

export const NotFound = () => (
  <div className="text-center mb-4">
    <h1 className="text-4xl font-bold mb-5">Page not found</h1>
    <p className="text-lg mb-6">
      We're so sorry, but the page you're looking for doesn't seem to exist.
    </p>
    <div className="mt-6">
      Return to{" "}
      <Link to="/" className="text-blue-600 underline">
        Home
      </Link>
    </div>
  </div>
);
