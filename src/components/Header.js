import { useNavigate } from "react-router-dom";

const Header = ({ token, handleToken, visible, setVisible }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="container">
        <div className="header-flex">
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
          {token ? (
            <div className="histo-deconnexion">
              <button
                onClick={() => {
                  handleToken(null);
                  navigate("/");
                }}
              >
                Se déconnecter
              </button>
              <button
                onClick={() => {
                  navigate("/list");
                }}
              >
                Historique
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  setVisible("login");
                }}
              >
                Se connecter
              </button>
              <button onClick={() => setVisible("signup")}>S'inscrire</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
