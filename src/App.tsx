import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col gap-5 border-gray-200 border-2 shadow rounded-md p-10 bg-white w-full max-w-[40rem] md:mx-0 mx-5">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-5">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 px-5 py-2 text-xl text-white font-bold tracking-wider capitalize rounded-md"
          >
            Increment
          </button>

          <h1 className="text-3xl font-medium text-gray-700">
            Count: <span className="text-indigo-500">{count}</span>
          </h1>

          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 px-5 py-2 text-xl text-white font-bold tracking-wider capitalize rounded-md"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
