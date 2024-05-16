import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex justify-center items-center mb-24 mt-40">
      <div className="bg-custom-light dark:bg-custom-dark p-8 rounded-lg shadow w-full border dark:border-custom-gray-300 max-w-md md:mx-0 mx-4">
        <h1 className="md:text-3xl text-xl text-center mb-8 text-custom-gray500 dark:text-custom-white font-[600] tracking-wider">
          Welcome to UnityRelief
        </h1>
        <p className="text-center text-2xl relative -top-[20px] font-[600] text-custom-main tracking-wide font-merriweather">
          Register
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
              User Name
            </label>
            <input
              {...register("userName", { required: true })}
              autoComplete="off"
              type="text"
              className={`w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500 ${
                errors.email ? "border-red-500" : "focus:border-custom-main"
              }`}
              placeholder="Enter your name"
            />
            {errors.userName && (
              <span className="text-red-500 text-xs">
                User name is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              autoComplete="off"
              id="email"
              name="email"
              type="text"
              className={`w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500 ${
                errors.email ? "border-red-500" : "focus:border-custom-main"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">Email is required</span>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              autoComplete="off"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              className={`w-full border-2 rounded-md py-2 px-3 focus:outline-none text-custom-gray ${
                errors.password ? "border-red-500" : "focus:border-custom-main"
              }`}
              placeholder="Enter your password"
            />
            <div className="absolute inset-y-0 right-0 top-8 pr-3 flex items-center cursor-pointer">
              {showPassword ? (
                <FiEyeOff
                  className="text-custom-gray500 hover:text-custom-main active:text-custom-main text-xl "
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FiEye
                  className="text-custom-gray500 hover:text-custom-main active:text-custom-main text-xl "
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs">Password is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r text-white rounded-md py-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4">
          <button className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 w-full text-sm text-custom-gray500 font-merriweather font-[600] tracking-wide mb-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <FcGoogle className="h-6 w-6 mr-2" />
            <span>Continue with Google</span>
          </button>
          <p className="mt-4 text-center text-custom-gray500 dark:text-custom-white font-Quicksand tracking-wider font-[500]">
            Already Have An Account?{" "}
            <Link
              to="/login"
              className="underline active:text-custom-main hover:text-custom-main"
            >
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
