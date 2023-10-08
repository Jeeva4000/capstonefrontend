import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
import { Paper, Typography } from "@mui/material";

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/", { replace: true });
    }
    let token = localStorage.getItem("token");
    const fetchAllData = async () => {
      const res = await fetch(`https://capstonebackend-47kj.onrender.com/cars/all`, {
        method: "GET",
        headers: {
          "x-auth-token": token
        },
      });
      const data = await res.json();


      if (!data.data) {
        setError(data.message);
      }
      setCars(data.data)
      // console.log(cars)
    };
    fetchAllData();
  }, [cars, navigate]);

  return (
    <Base>
      {cars && (
        <div className="container"> {/* Add a class to the container */}
          {cars?.map((data, index) => (
            <Paper elevation={6} key={data._id} className="paper"> {/* Add a class to the paper */}
              <div className="img-container"> {/* Add a class to the image container */}
                <img src={data.data.image} alt={data.image} />
              </div>
              <div className="details"> {/* Add a class to the details */}
                <p>Make  : {data.data.make}</p>
                <p>Model  : {data.data.model}</p>
                <p>Price  : {data.data.price}</p>
                <p>Color  : {data.data.color}</p>
                <p>FuelType  :{data.data.fuelType}</p>
                <p>Mileage  : {data.data.mileage}</p>
                <p>Transmission  : {data.data.transmission}</p>
                <p>Engine  : {data.data.engine}</p>
                <p>Horsepower  : {data.data.horsepower}</p>
                <p>Torque  : {data.data.torque}</p>
                <p>Drivetrain  : {data.data.drivetrain}</p>
              </div>
            </Paper>
          ))}
        </div>
      )}
      {error ? <Typography color="error">{error}</Typography> : ""}
    </Base>
  );
};

export default Dashboard;


