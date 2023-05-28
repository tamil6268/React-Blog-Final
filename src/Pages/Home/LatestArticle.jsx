// import { data } from "../../Components/TopPost-Data/API-DATA/Home";
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const LatestArticle = (props) => {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`/Bollywood/${id}`, { state: { item } });
    };
    const [data,setData]=useState([]);
    useEffect(()=>{
       axios
           .get('http://localhost:3008/home/topPost')
           .then((response)=>{
               setData(response.data);
           })
           .catch((error)=>{
               setData(error);
           })
    },[])
    return (
        <div id="container"style={{marginTop:"0px"}}>
            <span id="Title">{props.Title}</span>
            {data.map((item) => {
                return (
                    <div id="box">
                        <div id="parent" key={item.id}>
                            <img
                                // id="imageLatest"
                                className="img1"
                                onClick={() => handleNavigation(item.id, item)}
                                src={item.url}
                                alt={"404_Error Check your Connection please...."}
                                width={300}
                                height={200}
                            />
                            <div id="content">
                                <div className="miniTitle1">{item.title}</div>
                                <div className="miniParagraph1">{item.content}</div>
                                <span className="Traval1 miniTitle1">{item.category}{" /"}<span> {item.date}</span></span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LatestArticle;