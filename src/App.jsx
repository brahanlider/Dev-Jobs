import "./App.css";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { primaryRoutes } from "./routers/primaryRoutes";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={primaryRoutes} />
    </div>
  );
}

export default App;
