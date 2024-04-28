import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

function EditProduct() {
  const [userForm, setUserForm] = useState({
    name: "",
    description: "",
    price: "",
    categorey:"",
  });

  let params = useParams();
  let navigate = useNavigate();

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/products/update-product/" + params.id, {
        name: userForm.name,
        description: userForm.description,
        price: userForm.price,
        categorey:userForm.categorey,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/productlist-table");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/get-product/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          description: res.data.data.description,
          price: res.data.data.price,
          categorey:res.data.data.categorey,
        });
      });
  }, []);

  return (
    <div>
      <div className="form-wrapper">
        
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="email"
              value={userForm.description}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              id="rollno"
              value={userForm.price}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Categorey</label>
            <input
              type="text"
              className="form-control"
              name="categorey"
              id="rollno"
              value={userForm.categorey}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
