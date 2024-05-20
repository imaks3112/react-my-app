import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#083456";
      showAlert("Dark mode has been enable ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable  ", "success");
    }
  };

  return (
    <>
      <Navbar title="Text utils title" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          alert={showAlert}
        />

        <About />
      </div>
    </>
  );
}

export default App;
