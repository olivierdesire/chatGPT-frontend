import { useState } from "react";
import axios from "axios";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";

const Request = ({ baseUrl, token }) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsUpdating(true);
    try {
      const { data } = await axios.post(
        `${baseUrl}/chat/request`,
        {
          request: question,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      //   console.log("data>>", data.response.content);
      setResponse(data.response.content);
    } catch (error) {
      console.log(error);
    }
    setIsUpdating(false);
  };

  return (
    <div className="page-question">
      <div className="container-question">
        <p>Votre question</p>
        <form onSubmit={handleSubmit}>
          <div className="container-bloc">
            <textarea
              name="request"
              id="question"
              cols="50"
              rows="10"
              value={question}
              onChange={(event) => {
                setQuestion(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="buttons">
            {!isUpdating ? (
              <button>Soumettre</button>
            ) : (
              <div className="dots">
                <Dots />{" "}
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                setQuestion("");
                setResponse("");
              }}
            >
              Réinitialiser
            </button>
          </div>
        </form>
      </div>
      {response && <div className="container-bloc">{response}</div>}
    </div>
  );
};

export default Request;
