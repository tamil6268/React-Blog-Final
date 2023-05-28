// import { data } from "../TopPost-Data/API-DATA/BollywoodApi";
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Bollywood = (props) => {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`/bollywood/${id}`, { state: { item } });
    };
    const [data,setData]=useState([]);
    useEffect(()=>{
       axios
           .get('http://localhost:3008/bollywood/topPost')
           .then((response)=>{
              setTimeout(()=>{
                setData(response.data);
              },200)
           })
           .catch((error)=>{
            setData(error);
           })
    },[])

    return (
        <div id="container-Right" className="Right-side">
            <div id="Title">Top Post</div>
            <div>
                <div id="Right-side">
                    <div id="top-Parent" style={{padding:"20px"}}>
                        <img src={"https://thumbs.dreamstime.com/b/indian-music-dance-show-12799791.jpg"} width={435} height={250} style={{ marginTop: "25px" }} alt="404_Error" />
                        <div className="miniTitle1">{"Indian Music and Dance Show"}</div>
                        <div className="miniParagraph1">{"The Indian Bollywood Film Star Song and Dance Troupe perform on stage during Indian Music and Dance Show at Beijing Exhibition Theater on January 31, 2010 in Beijing, China."}</div>
                        <div className="Traval1 miniTitle1">{"on January 31, 2010"}</div>
                    </div>
                    {data.map((item) => {
                        return (
                            <div id="box" >
                                <div id="parent" key={item.id} style={{ width: "100%" }} onClick={() => handleNavigation(item.id, item)}>
                                    <img
                                        className="img1"
                                        src={item.url}
                                        alt={"404_Error Check your Connection please...."}
                                        width={250}
                                        height={150}
                                    />
                                    <div id="content" style={{}}>
                                        <div className="miniTitle1" style={{ height: "30px", overflow: "hidden" }}>{item.title}</div>
                                        <div className="miniParagraph1" style={{ height: "70px", overflow: "hidden" }}>{item.content}</div>
                                        <span className="Traval1 miniTitle1" style={{ height: "20px", overflow: "hidden" }}>{item.category}{" /"}<span> {item.date}</span></span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default Bollywood;