import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = ({ baseUrl, setVisible, handleToken }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [erreur, setErreur] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (email && password) {
        const { data } = await axios.post(`${baseUrl}/chat/user/login`, {
          email: email,
          password: password,
        });
        handleToken(data.token);
        setVisible(null);
        console.log(location.pathname);
        navigate(location.pathname);
      } else {
        setErreur("Tous les champs sont obligatoires");
      }
    } catch (error) {
      if (error?.response.data.error.message) {
        setErreur(error.response.data.error.message);
      }
    }
  };

  return (
    <div>
      <div className="title-h1">
        <p>Se connecter</p>
      </div>
      <form className="form-connexion" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="button-form">
          <button>Valider</button>
        </div>
        <p>{erreur}</p>
      </form>
      <button
        className="button-link"
        onClick={() => {
          setVisible("signup");
        }}
      >
        Pas de compte ? S'inscrire
      </button>
    </div>
  );
};

export default Login;
