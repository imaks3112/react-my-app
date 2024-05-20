import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";

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

  const removeClass = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-light');
  }

  const toggleMode = (cls) => {
    removeClass();
    document.body.classList.add('bg-'+cls);

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
      <Router>
        <Navbar title="Text utils title" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-5">
          <Routes>
            <Route exact path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  alert={showAlert}
                />
              }
            />
            
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
