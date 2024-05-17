import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-dark">
      <div className="bg-custom-dark p-8 rounded-lg shadow-lg max-w-md w-full text-center border border-custom-main">
        <h1 className="text-4xl font-bold text-custom-white mb-8">
          404 - Page Not Found
        </h1>
        <p className="text-custom-gray-300 mb-6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center py-3 px-6 bg-custom-main hover:bg-custom-mainDark text-white rounded-lg font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <AiOutlineHome className="mr-2 text-xl" />
          <span>Go back to homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
