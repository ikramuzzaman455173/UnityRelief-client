import {
  useDeleteReliefGoodMutation,
  useGetReliefGoodsQuery,
} from "@/redux/api/api";
import { Post } from "../Home/ReliefGoods/ReliefGoods";
import { FaEdit, FaSpinner, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import CustomButton from "@/components/SharedComponents/CustomButton";

const AllSupplies = () => {
  const { data: reliefGoods, isLoading } = useGetReliefGoodsQuery("high");
  const [openModal, setOpenModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<string>("");

  const [deleteReliefGoodMutation] = useDeleteReliefGoodMutation();
  const handleDelete = async (id: string) => {
    try {
      const result = await deleteReliefGoodMutation({ id });

      if ("error" in result) {
        // Handle error case
        console.error("Failed to delete relief good:", result.error);
        toast.error("Failed to delete relief good");
      } else {
        // Handle success case
        // console.log({ result });
        // console.log("Deleted relief good with id:", id);
        toast(result?.data?.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to delete relief good:", error.message);
        toast.error("Failed to delete relief good");
      }
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
    <>
      <div className="p-4 text-center">
        <div className="text-3xl w-full border-custom-main shadow-md font-Quicksand inline p-2 rounded-md text-custom-gray500 dark:text-custom-white border font-[600] tracking-wider">
          Total Supplies Post Crate:{" "}
          <span className="text-custom-main">{reliefGoods?.length || 0}</span>
        </div>
      </div>

      <div className="w-full text-center">
        <CustomButton className="my-5" to="/dashboard/create-supply">
          Click To Redirect Create Supply Page
        </CustomButton>
      </div>

      <div className="p-5 flex flex-col justify-center items-center">
        <div className="max-w-[900px] w-full md:mx-0 mx-5 text-md border dark:border-white bg-custom-light text-custom-gray500 dark:text-custom-white dark:bg-custom-dark shadow-md rounded mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-w-[5px]">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 px-5 text-custom-gray500 dark:text-custom-white">
                  Sl
                </th>
                <th className="text-left p-3 px-5 text-custom-gray500 dark:text-custom-white">
                  Title
                </th>
                <th className="text-left p-3 px-5 text-custom-gray500 dark:text-custom-white">
                  Category
                </th>
                <th className="text-left p-3 px-5 text-custom-gray500 dark:text-custom-white">
                  Amount
                </th>
                <th className="text-center p-3 px-5 text-custom-gray500 dark:text-custom-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {reliefGoods?.map((supply: Post, index: number) => (
                <tr
                  key={supply._id}
                  className="border-b hover:bg-orange-100 dark:hover:bg-custom-blackOne"
                >
                  <td className="p-3 px-5 text-custom-gray500 dark:text-custom-white">
                    {index + 1}
                  </td>
                  <td className="p-3 px-5 text-custom-gray500 dark:text-custom-white">
                    {supply.title}
                  </td>
                  <td className="p-3 px-5 text-custom-gray500 dark:text-custom-white">
                    {supply.category}
                  </td>
                  <td className="p-3 px-5 text-custom-gray500 dark:text-custom-white">
                    $ {supply.amount}
                  </td>
                  <td className="p-3 px-5 text-custom-gray500 dark:text-custom-white flex justify-end">
                    <Link
                      to={`/dashboard/update-supply/${supply?._id}`}
                      type="button"
                      className="mr-3 text-sm bg-custom-main transition duration-300 overflow-hidden active:scale-75 transform text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      // onClick={() => handleEdit(supply._id)}
                    >
                      <p className="flex items-center justify-center gap-2 text-lg p-2 tracking-wide font-merriweather font-medium">

                        <span>
                          <FaEdit />
                        </span>
                      </p>
                    </Link>
                    <button
                      type="button"
                      className="mr-3 text-sm bg-custom-red transition duration-300 overflow-hidden active:scale-75 transform text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline "
                      onClick={() => {
                        setDeleteItemId(supply?._id);
                        setOpenModal(true);
                      }}
                    >
                      <p className="flex items-center justify-center gap-2 text-lg p-2 tracking-wide font-merriweather font-medium">

                        <span>
                          <FaTrashAlt />
                        </span>
                      </p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>





      {/* Custom delete confirm modal */}
      <div className="mx-auto w-fit">
        {/* <button onClick={() => setOpenModal(true)} className="rounded-md bg-sky-500 px-5 py-[6px] text-white">
          Open
        </button> */}
        <div
          onClick={() => setOpenModal(false)}
          className={`fixed z-[100] flex items-center justify-center ${
            openModal ? "visible opacity-100" : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`text- absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white ${
              openModal
                ? "scale-1 opacity-1 duration-300"
                : "scale-0 opacity-0 duration-150"
            }`}
          >
            <div className="flex flex-col items-center justify-center">
              <RiErrorWarningLine className="text-custom-red text-5xl" />
              <h3 className="font-bold text-lg text-custom-gray500 dark:text-custom-white">
                Warning!
              </h3>
            </div>
            <p className="mb-5 text-[17px] font-Quicksand text-center mt-4 text-custom-gray dark:text-custom-gray-300">
              Are you sure you want to delete this <br />
              <span className="font-bold">Supply</span> Item ?
            </p>

            <div className="flex justify-between">
              <button
                onClick={() => {
                  setOpenModal(false);
                  handleDelete(deleteItemId);
                }}
                className="me-2 rounded-md bg-custom-main hover:bg-custom-mainDark px-6 py-[6px] text-white transition duration-300 overflow-hidden active:scale-75 transform "
              >
                Delete
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-custom-red px-6 transition duration-300 overflow-hidden active:scale-75 transform py-[6px] text-custom-red hover:bg-custom-red hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* update form modal */}
      </div>
    </>
  );
};

export default AllSupplies;
