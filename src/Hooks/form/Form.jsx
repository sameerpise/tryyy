import React, { useContext, useEffect, useState } from "react";
import "../context/styleee.css";
import { UserContextDemo } from "../context/UseContext";

export default function Form() {

  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState([]);
  
  const {
    inputs,
    setinputs,
    newinputs,
    filterData,
    setnewinputs,
    seacrh,
    find
  } = useContext(UserContextDemo);

  const handlesubmit = (e) => {
    e.preventDefault();

    setnewinputs((prev) => [...prev, inputs]);

    setinputs({
      username: "",
      email: "",
      pass: "",
      mobile: ""
    });
  };

  useEffect(() => {

    async function fetchData() {
      try {
        const getData = await fetch("https://jsonplaceholder.typicode.com/users");
        const newData = await getData.json();

        setStore(newData);
        setLoading(false);
      } catch (err) {
        console.log("error", err);
        setLoading(false);
      }
    }

    fetchData();

  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="container">

        <h2>Contact Form</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search user..."
            value={seacrh}
            onChange={(e) => find(e.target.value)}
          />
        </div>

        <form onSubmit={handlesubmit} className="form-box">

          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            value={inputs.username}
            onChange={(e) =>
              setinputs({ ...inputs, username: e.target.value })
            }
          />

          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={inputs.email}
            onChange={(e) =>
              setinputs({ ...inputs, email: e.target.value })
            }
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={inputs.pass}
            onChange={(e) =>
              setinputs({ ...inputs, pass: e.target.value })
            }
          />

          <label>Mobile</label>
          <input
            type="text"
            placeholder="mobile"
            value={inputs.mobile}
            onChange={(e) =>
              setinputs({ ...inputs, mobile: e.target.value })
            }
          />

          <button type="submit">Login</button>

        </form>

      </div>

      {/* User list from API */}

      <div className="container">

        <h2>User List</h2>

        <ul className="list">
          {store.map((item) => (
            <li key={item.id} className="list-item">
              {item.name}
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}