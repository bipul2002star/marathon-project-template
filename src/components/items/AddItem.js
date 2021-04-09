import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddItem = () => {
  let history = useHistory();
  const [item, setItem] = useState({
    name: "",
    breakfast: "",
    lunch: "",  
    dinner: "",
    comment: ""
  });

  const { name, breakfast, lunch, dinner, comment } = item;
  const onInputChangeItem = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmitItem = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/items", item);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add An Item</h2>
        <form onSubmit={e => onSubmitItem(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the day"
              name="name"
              value={name}
              onChange={e => onInputChangeItem(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="What to eat as Breakfast"
              name="breakfast"
              value={breakfast}
              onChange={e => onInputChangeItem(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="What to eat in Lunch"
              name="lunch"
              value={lunch}
              onChange={e => onInputChangeItem(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="What to eat in Dinner"
              name="dinner"
              value={dinner}
              onChange={e => onInputChangeItem(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Any Comment"
              name="comment"
              value={comment}
              onChange={e => onInputChangeItem(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
