import { RouterProvider } from "react-router-dom";
import router from "./routes";
function App() {
  return (
    <>
      <div className="flex flex-col mx-auto items-center min-h-screen bg-gray-700">
        <div className="flex flex-col items-center flex-grow w-[70%]">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
