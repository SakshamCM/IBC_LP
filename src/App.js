import "./App.css";
import Loader from "./components/Loader";
import PopupForm from "./components/PopupForm";
import AllRoutes from "./routes/AllRoutes";

// Pending Tasks

// 6. Mail Sent

function App() {
  return (
    <div className="App">
      <Loader />
      <AllRoutes />
      <PopupForm />
    </div>
  );
}

export default App;
