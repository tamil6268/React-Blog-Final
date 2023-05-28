// import { data } from "../../../Components/TopPost-Data/API-DATA/HomeTopPost";
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const TopPost = (props) => {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`/bollywood/${id}`, { state: { item } });
    };
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios
            .get('http://localhost:3008/home/topPost/limit=4')
            .then((response)=>{
                setData(response.data);
            })
            .catch((error)=>{
                setData(error);
            })
    },[])
    return (
        <div id="container-Right">
            <div id="Title">Top Post</div>
            <div>
                <div>
                    <div id="top-Parent" style={{padding:"20px"}}>
                        <img src={"https://thumbs.dreamstime.com/z/saint-petersburg-russia-july-film-crew-location-k-camera-cinematographer-filmmaking-set-scenery-saint-petersburg-russia-july-103360007.jpg"} id="top-parentImgCenter" height={250} style={{ marginTop: "25px" ,width:"auto" }} alt="404_Error" />
                        <div className="miniTitle1">{"Peter M. Lenkov (seated) producer and writer of the upcoming Jeff Bridges and Ryan Reynolds graphic novel movie R. I. P. D."}</div>
                        <div className="miniParagraph1">{"SAINT PETERSBURG, RUSSIA - JULY 22, 2017:Film Crew On Location. 4K Camera Cinematographer. Filmmaking. Set, scenery of the roadside cafe 80`s style"}</div>
                        <div className="Traval1 miniTitle1">{"on January 31, 2010"}</div>
                    </div>
                    {data.map((item) => {
                        return (
                            <div id="box">
                                <div id="parent" key={item.id} style={{ width: "100%" }}>
                                    <img
                                        className="img1"
                                        onClick={() => handleNavigation(item.id, item)}
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
export default TopPost;