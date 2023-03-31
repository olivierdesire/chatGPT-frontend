import { useNavigate } from "react-router-dom";

const Header = ({ token, handleToken, setVisible, search, setSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="container">
        <div className="header-flex">
          {token ? (
            <div>
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
