import { useDeleteReliefGoodMutation, useGetReliefGoodsQuery } from "@/redux/api/api";
import { Post } from "../Home/ReliefGoods/ReliefGoods";
import { FaEdit, FaSpinner, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { toast } from "react-toastify";

const AllSupplies = () => {
  const { data: reliefGoods, isLoading } = useGetReliefGoodsQuery("high");
  const [openModal, setOpenModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<string>("");

  const handleDelete = async (id: string) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = useDeleteReliefGoodMutation({ id }); // Assuming useDeleteReliefGoodMutation returns a promise
      if (data && data.success) {
        console.log("Deleted supply with id:", id);
        // Call the query hook to refetch the updated data
        useGetReliefGoodsQuery();
        // Show success toast message
        toast("Supply deleted successfully");
      } else {
        // Handle cases where data.success is false
        console.error("Failed to delete supply:", data?.error);
        // Show error toast message
        toast.error("Failed to delete supply");
      }
    } catch (error) {
      // Handle network errors or unexpected errors
      console.error("Failed to delete supply:", error.message);
      // Show error toast message
      toast.error("Failed to delete supply");
    }
  };


  const handleEdit = (id:string) => {
    // Implement edit logic here
    console.log("Editing supply with id:", id);
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
          Supplies All Posts
        </div>
      </div>
      <div className="px-3 py-4 flex justify-center items-center">
        <table className="max-w-[900px] w-full md:mx-0 mx-5 text-md border dark:border-white bg-custom-light text-custom-gray500 dark:text-custom-white dark:bg-custom-dark shadow-md  rounded mb-4 overflow-scroll">
          <thead>
            <tr className="border-b">
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
            {reliefGoods?.map((supply: Post) => (
              <tr
                key={supply._id}
                className="border-b hover:bg-orange-100 dark:hover:bg-custom-blackOne"
              >
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
                  <button
                    type="button"
                    className="mr-3 text-sm bg-custom-main transition duration-300 overflow-hidden active:scale-75 transform text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleEdit(supply._id)}
                  >
                    <p className="flex items-center justify-center gap-2 text-lg tracking-wide font-Quicksand font-medium">
                      Edit{" "}
                      <span>
                        <FaEdit />
                      </span>
                    </p>
                  </button>
                  <button
                    type="button"
                    className="mr-3 text-sm bg-custom-red transition duration-300 overflow-hidden active:scale-75 transform text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline "
                    onClick={() => {
                      setDeleteItemId(supply?._id);
                      setOpenModal(true);
                    }}
                  >
                    <p className="flex items-center justify-center gap-2 text-lg tracking-wide font-Quicksand font-medium">
                      Delete{" "}
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
                onClick={() => handleDelete(deleteItemId)}
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
      </div>
    </>
  );
};

export default AllSupplies;
