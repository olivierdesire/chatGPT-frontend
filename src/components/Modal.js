import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Modal = ({ visible, setVisible, baseUrl, handleToken }) => {
  return (
    <div
      className="modal-root"
      onClick={() => {
        setVisible(null);
      }}
    >
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={() => {
            setVisible(null);
          }}
        >
          X
        </button>
        {visible === "signup" ? (
          <Signup
            baseUrl={baseUrl}
            setVisible={setVisible}
            handleToken={handleToken}
          />
        ) : (
          <Login
            baseUrl={baseUrl}
            setVisible={setVisible}
            handleToken={handleToken}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
