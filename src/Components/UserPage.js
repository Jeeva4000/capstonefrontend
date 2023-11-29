

import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const [tokenId, setTokenId] = useState("");

  const fetchUserData = async (token) => {
    try {
      const res = await fetch(`https://capstonebackend-47kj.onrender.com/cars/user`, {
        method: "GET",
        headers: {
          "x-auth-token": token,
        },
      });

      const data = await res.json();

      if (!data || !Array.isArray(data.data)) {
        // setError("Data format error or no data received.");
      } else {
        setUserData(data.data);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }

    let token = localStorage.getItem("token");
    setTokenId(token);

    fetchUserData(token);
  }, [navigate]);

  return (
    <Base>
      <div>
        <Button style={{ border: '2px solid black', color: 'white', backgroundColor: 'yellowgreen' }} edge="end" color="inherit" aria-label="add cars" onClick={() => navigate(`/add/${tokenId}`)} sx={{ mr: 2 }}>
          Add Cars
        </Button>
      </div>

      {userData.length > 0 ? (
        <div>
          {userData.map((data, index) => (
            <Paper elevation={6} key={data._id}>
              <p>image: {data.data.image}</p>
              <p>make: {data.data.make}</p>
              <p>model: {data.data.model}</p>
              <p>color: {data.data.color}</p>
              <p>price: {data.data.price}</p>
              <p>fueltype: {data.data.fueltype}</p>
              <p>mileage: {data.data.mileage}</p>
              <p>transmission: {data.data.transmission}</p>
              <p>engine: {data.data.engine}</p>
              <p>horsepower: {data.data.horsepower}</p>
              <p>torque: {data.data.torque}</p>
              <p>drivetrain: {data.data.drivetrain}</p>


              <Button onClick={() => navigate(`/edit/${data._id}/${tokenId}`)}>Edit</Button>
              <Button>Delete</Button>
            </Paper>
          ))}
        </div>
      ) : (
        <Typography color="info">No data available</Typography>
      )}

      {error ? <Typography color="error">{error}</Typography> : null}
    </Base>
  );
};

export default UserPage;

