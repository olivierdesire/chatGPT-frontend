import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import Cookies from "js-cookie";
import Request from "./pages/Request";
import List from "./pages/List";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [visible, setVisible] = useState(null);

  const baseUrl = "https://site--backends--97yqlpf4l44b.code.run";
  // const baseUrl = "http://localhost:3001";

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 1, samSite: "strict" });
    } else {
      Cookies.remove("token");
    }
    setToken(token);
  };

  return (
    <BrowserRouter>
      <Header
        token={token}
        handleToken={handleToken}
        visible={visible}
        setVisible={setVisible}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/request"
          element={<Request baseUrl={baseUrl} token={token} />}
        />
        <Route
          path="/list"
          element={<List baseUrl={baseUrl} token={token} />}
        />
      </Routes>
      {visible && (
        <Modal
          visible={visible}
          setVisible={setVisible}
          baseUrl={baseUrl}
          handleToken={handleToken}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
