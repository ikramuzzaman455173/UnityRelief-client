import { useAddReliefGoodMutation } from "@/redux/api/api";
import { useState } from "react";
import { toast } from "react-toastify";

import { SubmitHandler, useForm } from "react-hook-form";

// Define your form data type
type SupplyFormData = {
  image: FileList;
  category: string;
  title: string;
  amount: number;
  details: string;
};

const CreateSupply = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupplyFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [addReliefGood] = useAddReliefGoodMutation();
  const [supplyImage, setSupplyImage] = useState<File | null>(null);

  const onSubmit: SubmitHandler<SupplyFormData> = async (data) => {
    console.log({ data });
    try {
      // Create form data
      // eslint-disable-next-line prefer-const
      let formData = new FormData();
      if (supplyImage) {
        formData.append("image", supplyImage);
      }

      // Upload image to imgbb.com only if supplyImage is not null
      if (supplyImage) {
        const imgbbResponse = await fetch(
          "https://api.imgbb.com/1/upload?key=8c16eee079a4a1b48f687364d861ce93",
          {
            method: "POST",
            body: formData,
          }
        );

        console.log({ imgbbResponse });

        if (!imgbbResponse.ok) {
          return toast.error("Failed to upload image to imgbb");
        }

        const imgbbResult = await imgbbResponse.json();
        console.log(imgbbResult);
        const imageUrl = imgbbResult.data.url;

        const { title, amount, category, details } = data || {};

        // Post data including image URL
        const reliefGoodData = {
          title,
          amount,
          category,
          details,
          image: imageUrl,
        };

        addReliefGood(reliefGoodData);

        // console.log("Relief good added successfully:", reliefGoodData);

        // Show success toast
        toast("New supply added successfully");
      }
    } catch (error) {
      console.error("Error adding new supply:", error);
      // Show error toast
      toast.error("Error adding relief good");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSupplyImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setImagePreview(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center mb-16">
      <div className="bg-custom-light dark:bg-custom-dark p-8 rounded shadow w-full border max-w-md md:mx-0 mx-4 dark:border-custom-gray-300">
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
              Details
            </label>
            <textarea
              {...register("details", { required: true })}
              className={`w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500 ${
                errors.details ? "border-red-500" : "focus:border-custom-main"
              }`}
              placeholder="Enter details"
              rows={4}
            />
            {errors.details && (
              <span className="text-red-500 text-xs">Details is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r font-[600] tracking-wider font-Quicksand text-white rounded-md py-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 transition duration-300"
          >
            Add Supply
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSupply;
