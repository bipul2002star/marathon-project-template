import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Schedule = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const result = await axios.get("http://localhost:3003/items");
        setItem(result.data);
    };

    const deleteItem = async id => {
        await axios.delete(`http://localhost:3003/items/${id}`);
        loadItems();
    };

    return (
        <div className="container">
            <div className="py-4">
               <p className="display-2 py-6 text-center my-6"> The Weekly Meal Reminder cum Scheduler Utility </p>
        <table class="table table-striped border shadow">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Day</th>
                            <th scope="col">Breakfast</th>
                            <th scope="col">Lunch</th>
                            <th scope="col">Dinner</th>
                            <th scope="col">Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.breakfast}</td>
                                <td>{item.lunch}</td>
                                <td>{item.dinner}</td>
                                <td>{item.comment}</td>
                                <td className="d-flex ">
                                    <Link class="btn btn-success mr-2" to={`/items/${item.id}`}>
                                        View
                                    </Link>
                                    <Link
                                        class="btn btn-outline-primary mr-2"
                                        to={`/items/edit/${item.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        class="btn btn-danger"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        Delete
                                  </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link className="btn btn-outline-dark" to="/items/add">Add</Link>
















            </div>

            <button type="button" class="btn btn-warning btn-lg" /*onClick= {(canvas)=>{Canvas2Image.saveAsPNG(canvas);}}*/>Take Screenshot</button>





        </div>
    );
};

export default Schedule;
