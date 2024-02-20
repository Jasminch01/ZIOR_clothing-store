import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
