// import { useForm } from "react-hook-form";

// const CreateSupply = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = () => {};

//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="bg-custom-light dark:bg-custom-dark p-8 rounded-lg shadow w-full border max-w-md md:mx-0 mx-4">
//         <h1 className="md:text-3xl text-xl text-center mb-8 text-custom-gray500 dark:text-custom-white font-[600] tracking-wider">
//           Create New Supply
//         </h1>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
//               User Name
//             </label>
//             <input
//               {...register("userName", { required: true })}
//               autoComplete="off"
//               type="text"
//               className={`w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500 ${
//                 errors.email ? "border-red-500" : "focus:border-custom-main"
//               }`}
//               placeholder="Enter your name"
//             />
//             {errors.userName && (
//               <span className="text-red-500 text-xs">
//                 User name is required
//               </span>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r text-white rounded-md py-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 transition duration-300"
//           >
//             Add Supply
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateSupply;

import { useState } from "react";
import { useForm } from "react-hook-form";

const CreateSupply = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (data) => {
    // Handle form submission, including image upload
    console.log(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex  justify-center items-center">
      <div className="bg-custom-light dark:bg-custom-dark p-8 rounded shadow w-full border max-w-md md:mx-0 mx-4 border dark:border-custom-gray-300">
        <h1 className="md:text-3xl text-xl border-custom-main text-center mb-8 text-custom-gray500 dark:text-custom-white font-[600] tracking-wider border p-2 rounded-md shadow">
          Create New Supply
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
                Image
              </label>
              <input
                {...register("image", { required: true })}
                onChange={handleImageChange}
                type="file"
                accept="image/*"
                className={`w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500 ${
                  errors.image ? "border-red-500" : "focus:border-custom-main"
                }`}
              />
              {errors.image && (
                <span className="text-red-500 text-xs">Image is required</span>
              )}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="mt-5 max-w-full h-auto  rounded-md border p-1 shadow-md dark:bg-custom-gray-300"
                />
              )}
            </div>

            <div>
              <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
                Category
              </label>
              <input
                {...register("category", { required: true })}
                type="text"
                className={`w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500 ${
                  errors.category
                    ? "border-red-500"
                    : "focus:border-custom-main"
                }`}
                placeholder="Enter category"
              />
              {errors.category && (
                <span className="text-red-500 text-xs">
                  Category is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
                Title
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                className={`w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500 ${
                  errors.title ? "border-red-500" : "focus:border-custom-main"
                }`}
                placeholder="Enter title"
              />
              {errors.title && (
                <span className="text-red-500 text-xs">Title is required</span>
              )}
            </div>

            <div>
              <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
                Amount
              </label>
              <input
                {...register("amount", { required: true })}
                type="number"
                className={`w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500 ${
                  errors.amount ? "border-red-500" : "focus:border-custom-main"
                }`}
                placeholder="Enter amount"
              />
              {errors.amount && (
                <span className="text-red-500 text-xs">Amount is required</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              className={`w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500 ${
                errors.description
                  ? "border-red-500"
                  : "focus:border-custom-main"
              }`}
              placeholder="Enter description"
              rows={4}
            />
            {errors.description && (
              <span className="text-red-500 text-xs">
                Description is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r text-white rounded-md py-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 transition duration-300"
          >
            Add Supply
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSupply;
