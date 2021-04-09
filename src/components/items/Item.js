import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Item = () => {
  const [item, setItem] = useState({
    name: "",
    breakfast: "",
    lunch: "",  
    dinner: "",
    comment: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadItem();
  }, []);
  const loadItem = async () => {
    const res = await axios.get(`http://localhost:3003/items/${id}`);
    setItem(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">Item Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"><strong>Day of the week: </strong>{item.name}</li>
        <li className="list-group-item"><strong>Breakfast Dish: </strong>{item.breakfast}</li>
        <li className="list-group-item"><strong>Lunch Dish: </strong>{item.lunch}</li>
        <li className="list-group-item"><strong>Dinner Dish: </strong>{item.dinner}</li>
        <li className="list-group-item"><strong>comment: </strong>{item.comment}</li>
      </ul>
    </div>
  );
};

export default Item;
