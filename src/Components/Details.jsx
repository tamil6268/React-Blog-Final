import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import '../App.css';
import './Details.style.css';
import BlogPost from './BlogPost/BlogPost'
const BollywoodDetails = () => {
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    async function getBollywoodDetails() {
      const response = await fetch(`https://thumbs.dreamstime.com/b/images/${params.Id}`, {
        method: "GET",
      });
      const data = await response.json();
      return data;
    }
    getBollywoodDetails();
  }, [params.Id]);

  const item = location.state.item;
  return (
    <div id="container">
      <div style={{ textAlign: "center" }}>
        <h1 id="title-Fold" style={{ border: "1px solid gray", marginTop: "30px", marginBottom: "30px", padding: "10px" }}>{item.title}</h1>

        <div id="Box-Profile">
          <div id="Profile">
            <div>
              <img src={item.url} width={50} height={50} style={{ borderRadius: "50%" }} alt="404_Error" />
            </div>
            <div id="Name">
              <div>{item.title}</div>
              <div>{item.date}· 10 min read</div>
            </div>
          </div>
          {/* <div id="Icons">
            <div onClick={()=>alert("FaceBook")}>FaceBook</div>
            <div onClick={()=>alert("Twitter")}>Twitter</div>
            <div onClick={()=>alert("Instagram")}>Instagram</div>
            <div onClick={()=>alert("You-Tube")}>You-Tube</div>
          </div> */}
        </div>
        <br />
        <br />

        <img id="detais-img" style={{ border: "3px solid black" }} src={item.url} width={700} height={500} alt={"404_Error"} />
        <div id="details-content">{item.content}{item.content}<br />{item.content}<br />{item.content}<br /><br />{item.content}{item.content}{item.content}<br /><br />{item.content}</div>

        <div id="author">
          <div style={{ display: "flex" }}>
            <button>HTML</button>
            <button>CSS</button>
            <button>JAVA SCRIPT</button>
            <button>REACT JS</button>
            <button>NODE JS</button>
          </div>
          <div id="claps">Claps : 9.12 K</div>

          <div id="Author-profile" style={{ borderTop: "1px solid gray", borderBottom: "1px solid gray", width: "100%" }}>
            <div id="Box-Profile">
              <div id="Profile">
                <div>
                  <img src={item.url} width={50} height={50} style={{ borderRadius: "50%" }} alt="404_Error" />
                </div>
                <div id="Name">
                  <div style={{ fontWeight: "bold" }}>Written By</div>
                  <div>{item.name}</div>
                  <div>{item.title}</div>
                  <div>{item.date}· 10 min read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BlogPost Title="Related-Post" />
      </div>
    </div>
  );
};

export default BollywoodDetails;