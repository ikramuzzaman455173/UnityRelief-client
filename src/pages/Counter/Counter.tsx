import { Button } from "@/components/ui/button";
import { decrement, increment } from "../../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col gap-5 border-gray-200 border-2 shadow rounded-md p-10 bg-custom-white w-full max-w-[40rem] md:mx-0 mx-5">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-5">
          <Button
            onClick={() => dispatch(increment())}
            className="bg-green-500 px-5 py-2 text-xl active:transform active:scale-[2] transition duration-300 ease-linear text-custom-white font-bold tracking-wider capitalize rounded-md"
          >
            Increment
          </Button>

          <h1 className="text-3xl font-medium text-gray-700">
            Count: <span className="text-indigo-500">{count}</span>
          </h1>

          <Button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 px-5 py-2 text-xl text-custom-white font-bold tracking-wider capitalize rounded-md"
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
