import {
  useGetReliefGoodByIdQuery,
  useUpdateReliefGoodMutation,
} from "@/redux/api/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import CustomButton from "@/components/SharedComponents/CustomButton";

type SupplyFormData = {
  _id: string;
  image: FileList;
  category: string;
  title: string;
  amount: number;
  details: string;
};

const UpdateSupply = () => {
  const { register, handleSubmit, setValue } = useForm<SupplyFormData>();
  const { id } = useParams();
  const { data: supplyData, isLoading } = useGetReliefGoodByIdQuery(id);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [newImage, setNewImage] = useState<string>("");

  const [updateReliefGood] = useUpdateReliefGoodMutation();
  const [, setSupplyImage] = useState<File | null>(null);

  useEffect(() => {
    if (supplyData) {
      setValue("category", supplyData.category);
      setValue("title", supplyData.title);
      setValue("amount", supplyData.amount);
      setValue("details", supplyData.details);
      if (supplyData.image) {
        // If supplyData has an image, set the imagePreview state to its URL
        setImagePreview(
          supplyData.image instanceof FileList ? null : supplyData.image
        );
      }
    }
  }, [supplyData, setValue]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSupplyImage(file);
      setImagePreview(URL.createObjectURL(file));

      try {
        const formData = new FormData();
        formData.append("image", file);

        const imgbbResponse = await fetch(
          "https://api.imgbb.com/1/upload?key=8c16eee079a4a1b48f687364d861ce93",
          {
            method: "POST",
            body: formData,
          }
        );

        if ("error" in imgbbResponse) {
          return toast.error("Failed to upload image to imgbb");
        }

        const imgbbResult = await imgbbResponse.json();
        const imageUrl = imgbbResult.data.url;
        // console.log({ imageUrl });
        if (imageUrl) {
          setNewImage(imageUrl);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image");
      }
    }
  };

  const onSubmit: SubmitHandler<SupplyFormData> = async (data) => {
    try {
      const { title, amount, category, details } = data || {};
      const supplyUpdateData = {
        id: supplyData?._id, // assuming id is included in supplyData
        reliefGood: {
          title,
          amount,
          category,
          details,
          image: newImage ? newImage : supplyData.image,
        },
      };
      // console.log({ data, image: supplyData?.image, supplyUpdateData });

      const updatedSupplyResponse = await updateReliefGood(supplyUpdateData);

      if ("error" in updatedSupplyResponse) {
        return toast.error("Failed to update supply");
      }

      toast("Supply updated successfully");
    } catch (error) {
      console.error("Error updating supply:", error);
      toast.error("Error updating supply");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-custom-main" />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <CustomButton className="my-5" to="/dashboard/supplies">Click To Redirect Supplies Page</CustomButton>
      <div className="bg-custom-light dark:bg-custom-dark p-8 rounded shadow w-full border max-w-md md:mx-0 mx-4 dark:border-custom-gray-300">
        <h1 className="md:text-3xl text-xl border-custom-main text-center mb-8 text-custom-gray500 dark:text-custom-white font-[600] tracking-wider border p-2 rounded-md shadow">
          Update Supply
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
                Image
              </label>
              <input
                {...register("image")}
                onChange={handleImageChange}
                type="file"
                accept="image/*"
                className="w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500"
              />

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="mt-5 max-w-full h-auto rounded-md border p-1 shadow-md dark:bg-custom-gray-300"
                />
              )}
            </div>

            <div>
              <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
                Category
              </label>
              <input
                {...register("category")}
                type="text"
                className="w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500"
              />
            </div>

            <div>
              <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
                Title
              </label>
              <input
                {...register("title")}
                type="text"
                className="w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500"
              />
            </div>

            <div>
              <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
                Amount
              </label>
              <input
                {...register("amount")}
                type="number"
                className="w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500"
              />
            </div>
          </div>

          <div>
            <label className="block text-custom-gray500 dark:text-custom-gray-300 font-Quicksand font-[600] tracking-wide mb-2">
              Details
            </label>
            <textarea
              {...register("details")}
              className="w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none text-custom-gray500"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r font-[600] tracking-wider font-Quicksand text-white rounded-md py-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 transition duration-300 active:scale-105 transform overflow-hidden border-2 active:border-4 border-custom-gray-300 active:dark:border-custom-white"
          >
            Update Supply
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSupply;
