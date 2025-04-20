import React from "react";
import CardStack from "./components/CardStack";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App bg-gray-100">
      <CardStack />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
