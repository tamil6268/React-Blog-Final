import "./BlogPost.style.css";
import "../../App.css";
// import { data, data1, data2 } from "../../Utility/ApiCaller";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BlogPost(props) {
  const navigate = useNavigate();
  const handleNavigation = (id, item) => {
    // two arg - 1. pathname - 2. state
    navigate(`/bollywood/${id}`, { state: { item } });
  };
  const [data, setData] = useState([]);
  console.log("Blogpost",data)
  const [data1, setData1] = useState([]);
  console.log("Blogpost",data1)
  const [data2, setData2] = useState([]);
  console.log("Blogpost",data2)
  useEffect(() => {
    axios.get("http://localhost:3008/blogPost").then((response) => {
      setData(response.data[0]);
      setData1(response.data[1]);
      setData2(response.data[2]);
    });
  }, []);
  return (
    <>
      <div id="Title" style={{ width: "200px", marginLeft: "40px" }}>
        {props.Title}
      </div>
      <div id="flexBlog">
        <div id="Blog">
          <div key={data.id} onClick={() => handleNavigation(data.id, data)}>
            <img
              className="img2"
              
              src={data.url}
              alt={"404_Error Check your Connection please...."}
              width={370}
              height={210}
              style={{ borderRadius: "15px" }}
            />
            <div
              id="BlogContent"
              onClick={() => handleNavigation(data.id, data)}
            >
              <div className="miniTitle1">{data.title}</div>
              <div className="miniParagraph1">{data.content}</div>
              <div className="Traval1">
                {data.category} / {data.date}
              </div>
            </div>
          </div>
        </div>
        <div id="Blog">
          <div key={data1.id} onClick={() => handleNavigation(data1.id, data1)}>
            <img
              className="img2"
              
              src={data1.url}
              alt={"404_Error Check your Connection please...."}
              width={370}
              height={210}
              style={{ borderRadius: "15px" }}
            />
            <div
              id="BlogContent"
              onClick={() => handleNavigation(data1.id, data1)}
            >
              <div className="miniTitle1">{data1.title}</div>
              <div className="miniParagraph1">{data1.content}</div>
              <div className="Traval1">
                {data1.category} / {data1.date}
              </div>
            </div>
          </div>
        </div>
        <div id="Blog">
          <div key={data2.id} onClick={() => handleNavigation(data2.id, data2)}>
            <img
              className="img2"
              
              src={data2.url}
              alt={"404_Error Check your Connection please...."}
              width={370}
              height={210}
              style={{ borderRadius: "15px" }}
            />
            <div
              id="BlogContent"
              onClick={() => handleNavigation(data2.id, data2)}
            >
              <div className="miniTitle1">{data2.title}</div>
              <div className="miniParagraph1">{data2.content}</div>
              <div className="Traval1">
                {data2.category} / {data2.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogPost;
