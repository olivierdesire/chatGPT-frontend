import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Signup = ({ baseUrl, setVisible, handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [erreur, setErreur] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (email && username && password) {
        if (password === confirmPassword) {
          const { data } = await axios.post(`${baseUrl}/chat/user/signup`, {
            username: username,
            email: email,
            password: password,
          });
          handleToken(data.token);
          setVisible(null);
          navigate(location.pathname);
        } else {
          setErreur("Mots de passe différents");
        }
      } else {
        setErreur("Tous les champs sont obligatoires");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form-connexion" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
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
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
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
          setVisible("login");
        }}
      >
        Déjà un compte ? Se connecter
      </button>
    </div>
  );
};

export default Signup;
