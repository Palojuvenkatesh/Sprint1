import React, { useEffect, useState } from "react";
import axios from "axios";
import './createform.css';

function CreateProduct() {
  const [userForm, setUserForm] = useState({
    name: "",
    description: "",
    price: "",
    categorey: "",
   
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
     
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/products/create-product", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          description: "",
          price: "",
          categorey: ""
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label ">Name:</label>
            <input
              type="text"
              className="form-control input-box1"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <input
              type="text"
              className="form-control input-box1"
              name="description"
              id="email"
              value={userForm.description}
              onChange={inputsHandler}
            />

            
          </div>

         

          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input
              type="text"
              className="form-control input-box1"
              name="price"
              id="rollno"
              value={userForm.price}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Categorey:</label>
            <input
              type="text"
              className="form-control input-box1"
              name="categorey"
              id="rollno"
              value={userForm.categorey}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
