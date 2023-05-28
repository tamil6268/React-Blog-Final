// import { data } from "../../API-DATA/BollywoodApi";
import { useNavigate } from "react-router-dom";
import BollywoodTopPost from '../../Components/TopPost-Data/Bollywood'
import Ads from '../../Common/Ads'
import {useEffect,useState} from 'react';
import axios from 'axios';

const Bollywood = (props) => {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`/bollywood/${id}`, { state: { item } });
    };
    
    const [data,setData]=useState([]);
    console.log("Data",data)
    useEffect(()=>{
       axios
            .get('http://localhost:3008/bollywood')
            .then((response)=>{
                setData(response.data);
                console.log(response.data);
            })
            .catch((error)=>{
                setData("404_ERROR Page Data Not-Found",error)
            })
    },[])

    return (
        <section>
            <div id="Left-Side">
                <div id="container">
                    <span id="Title">{props.Title}</span>
                    {data.map((item) => {
                        return (
                            <div id="box">
                                <div id="parent" key={item.id}>
                                    <img
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
            </div>
            <div className="Right-Side">
                <BollywoodTopPost />
                <Ads />
            </div>
        </section>
    );
};

export default Bollywood;