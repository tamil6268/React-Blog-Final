// import { data } from "../../API-DATA/FoodApi";
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import FoodTopPost from '../../Components/TopPost-Data/Food'
import Ads from '../../Common/Ads'
const Food = (props) => {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`https://heisenberg-tamil.onrender.com/Food/${id}`, { state: { item } });
    };
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios
            .get('https://heisenberg-tamil.onrender.com/food')
            .then((response)=>{
                setData(response.data)
            })
            .catch((error)=>{
                setData(error)
            })
    },[])
    return (
        <div>
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
        <div className="Right-Side">
            <FoodTopPost />
            <Ads />
        </div>
        </div>
    );
};

export default Food;
