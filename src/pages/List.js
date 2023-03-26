import { useState, useEffect } from "react";
import axios from "axios";

const List = ({ baseUrl, token }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/chat/request/list`, {
          headers: {
            authorization: "Bearer " + token,
          },
        });
        console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Downloading</p>
  ) : (
    <section className="page-list">
      {data.map((element) => {
        return (
          <div key={element._id} className="list container-list">
            <div className="request">{element.request}</div>
            <div className="trait"></div>
            <div className="response">{element.response}</div>
          </div>
        );
      })}
    </section>
  );
};

export default List;
