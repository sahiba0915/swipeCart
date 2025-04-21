import React from "react";
import CardStack from "./components/CardStack";
import { ToastContainer } from "react-toastify";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App bg-gray-100 h-screen overflow-hidden">
      <TopNav/>
      <CardStack />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
