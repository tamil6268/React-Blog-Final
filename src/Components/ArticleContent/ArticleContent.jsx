import "./articlecontent.style.css";
// import { data, data1, data2 } from "../../Utility/ApicallerHead";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ArticleContent() {
  const navigate = useNavigate();
  const handleNavigation = (id, item) => {
    // two arg - 1. pathname - 2. state
    navigate(`/bollywood/${id}`, { state: { item } });
  };
  const [data, setData] = useState([]);
  console.log(data);
  const [data1, setData1] = useState([]);
  console.log(data1);
  const [data2, setData2] = useState([]);
  console.log(data2);
  useEffect(() => {
    axios
      .get("https://heisenberg-tamil.onrender.com/")
      .then((response) => {
        setData(response.data[0]);
        setData1(response.data[1]);
        setData2(response.data[2]);
        console.log("data", response.data[0]);
      })
      .catch((error) => {
        setData("404_ERROR Page Not Found...", error);
      });
  }, []);
  return (
    <div id="Pic">
      <div id="one">
        <div id="img2" key={data.id}>
          <img
            className="img2"
            onClick={() => handleNavigation(data.id, data)}
            src={data.url}
            alt={"404_Error Check your Connection please...."}
            id="headOnePic"
            style={{ borderRadius: "15px" }}
          />
          <div id="oneText">
            <div className="Text">
              {data.title}
              <div className="Traval">
                {data.category} / {data.date}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="two">
            <div key={data1.id}>
              <img
                className="img1"
                onClick={() => handleNavigation(data1.id, data1)}
                src={data1.url}
                alt={"404_Error Check your Connection please...."}
                id="headTwoPic"
                style={{ borderRadius: "15px" }}
              />
              <div id="twoText">
                <div className="Text">
                  {data1.title}
                  <div className="Traval">
                    {data1.category} / {data1.date}
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div id="three">
            <div key={data2.id}>
              <img
                className="img1"
                onClick={() => handleNavigation(data2.id, data2)}
                src={data2.url}
                alt={"404_Error Check your Connection please...."}
                id="headThreePic"
                style={{ borderRadius: "15px" }}
              />
              <div id="twoText">
                <div className="Text">
                  {data2.title}
                  <div className="Traval">
                    {data2.category} / {data2.date}
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}
export default ArticleContent;
