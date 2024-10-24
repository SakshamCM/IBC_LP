import "./App.css";
import Loader from "./components/Loader";
import PopupForm from "./components/PopupForm";
import WaitingLoader from "./components/WaitingLoader";
import AllRoutes from "./routes/AllRoutes";
import { ToastContainer, toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Pending Tasks

// 6. Mail Sent

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Loader />
      <AllRoutes />
      <PopupForm />
      <WaitingLoader />
    </div>
  );
}

export default App;
