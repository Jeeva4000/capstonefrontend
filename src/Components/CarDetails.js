

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';

function CarsDetails({ cars }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="car-details">
            <Button onClick={handleOpen}>View Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="cars-details-modal"
                aria-describedby="cars-details"
            >
                <div className="car-details-content">
                    <Typography variant="h5" className="car-details-name">
                        {cars.data.make} {cars.data.model}
                    </Typography>
                    <img
                        src={cars.data.image}
                        alt={cars.data.make}
                        className="car-details-image"
                    />

                    <Typography className="car-details-title">
                        Price: {cars.data.price}
                    </Typography>
                    <Typography className="car-details-description">
                        Color: {cars.data.color}
                    </Typography>
                    <Typography className="car-details-fuel-type">
                        Fuel Type: {cars.data.fuelType}
                    </Typography>
                    <Typography className="car-details-mileage">
                        Mileage: {cars.data.mileage}
                    </Typography>
                    <Typography className="car-details-transmission">
                        Transmission: {cars.data.Transmission}
                    </Typography>
                    <Typography className="car-details-engine">
                        Engine: {cars.data.Engine}
                    </Typography>
                    <Typography className="car-details-horsepower">
                        Horsepower: {cars.data.Horsepower}
                    </Typography>
                    <Typography className="car-details-torque">
                        Torque : {cars.data.Torque}
                    </Typography>
                    <Typography className="car-details-drivetrain">
                        Drivetrain : {cars.data.Drivetrain}
                    </Typography>
                    <Button variant="contained" onClick={handleClose} className="car-details-close-button">
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export default CarsDetails;


