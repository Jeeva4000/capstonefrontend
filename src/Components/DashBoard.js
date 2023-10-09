
import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
import { Paper, Typography, Modal, Button } from "@mui/material";

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    };
    fetchAllData();
  }, [navigate]);


  const handleOpenModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
  };

  return (
    <Base>
      {cars && (
        <div className="container">
          {cars?.map((data, index) => (
            <Paper elevation={6} key={data._id} className="paper">
              <div
                className="img-container"
                onClick={() => handleOpenModal(data)}
              >
                <img src={data.data.image} alt={data.image} />
              </div>

            </Paper>
          ))}
        </div>
      )}
      {error ? <Typography color="error">{error}</Typography> : ""}


      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="car-details-modal"
        aria-describedby="car-details"
      >
        <div className="car-details">
          {selectedCar && (
            <>
              <Typography variant="h5" className="car-details-name">
                {selectedCar.data.make} {selectedCar.data.model}
              </Typography>
              <img
                src={selectedCar.data.image}
                alt={selectedCar.data.make}
                className="car-details-image"
              />

              <Typography className="car-details-title">
                Price: {selectedCar.data.price}
              </Typography>
              <Typography className="car-details-description">
                Color: {selectedCar.data.color}
              </Typography>
              <Typography className="car-details-fuel-type">
                Fuel Type: {selectedCar.data.fuelType}
              </Typography>
              <Typography className="car-details-mileage">
                Mileage: {selectedCar.data.mileage}
              </Typography>
              <Typography className="car-details-transmission">
                Transmission: {selectedCar.data.transmission}
              </Typography>
              <Typography className="car-details-engine">
                Engine: {selectedCar.data.engine}
              </Typography>
              <Typography className="car-details-horsepower">
                Horsepower: {selectedCar.data.horsepower}
              </Typography>
              <Typography className="car-details-torque">
                Torque : {selectedCar.data.torque}
              </Typography>
              <Typography className="car-details-drivetrain">
                Drivetrain : {selectedCar.data.drivetrain}
              </Typography>
              <Button variant="contained" onClick={handleCloseModal} className="car-details-close-button">
                Close
              </Button>
            </>
          )}
        </div>
      </Modal>
    </Base>
  );
};

export default Dashboard;
