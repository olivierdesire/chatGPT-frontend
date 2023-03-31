import { useState, useEffect } from "react";
import axios from "axios";
import transformResponse from "../function/transformResponse";

const List = ({ baseUrl, token, search }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let filter = "";
        if (search) {
          filter = "?search=" + search;
        }
        const { data } = await axios.get(`${baseUrl}/chat/request${filter}`, {
          headers: {
            authorization: "Bearer " + token,
          },
        });
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [baseUrl, token, search]);

  return isLoading ? (
    <p>Downloading</p>
  ) : (
    <section className="page-list">
      {data.map((element) => {
        return (
          <div key={element._id} className="list container-list">
            <div className="request">{element.request}</div>
            <div className="trait"></div>

            {transformResponse(element.response).map((e2, i2) => {
              return (
                <p key={i2} className="response">
                  {e2}
                </p>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default List;
