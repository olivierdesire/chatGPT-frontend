import { useNavigate } from "react-router-dom";
import imgChatGPT from "../assets/img/chatGPT.jpg";

const Header = ({ token, handleToken, setVisible, search, setSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="container">
        <div className="header-flex">
          {token ? (
            <div className="header-max">
              <div className="header-row">
                <button
                  onClick={() => {
                    if (token) {
                      navigate("/request");
                    } else {
                      setVisible("login");
                    }
                  }}
                >
                  Poser votre question
                </button>
                <button
                  onClick={() => {
                    handleToken(null);
                    navigate("/");
                  }}
                >
                  Se déconnecter
                </button>
              </div>
              <img
                className="header-img hidden"
                src={imgChatGPT}
                alt="logo chatGPT"
              />
              <div className="header-row">
                <button
                  onClick={() => {
                    navigate("/list");
                  }}
                >
                  Historique
                </button>
                <input
                  className="input"
                  type="text"
                  name="search"
                  placeholder="Saisir votre recherche"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="header-row">
              <button
                onClick={() => {
                  setVisible("login");
                }}
              >
                Se connecter
              </button>
              <button onClick={() => setVisible("signup")}>S'inscrire</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
