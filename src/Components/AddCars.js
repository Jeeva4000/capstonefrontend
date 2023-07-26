import React, { useState } from "react"
import Base from "../Base/Base"
import { Button, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
const AddCars = ({ userData, setUserData }) => {
    const { token } = useParams();
    const [image, setImage] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [fuelType, setFueltype] = useState("")
    const [mileage,setMileage] = useState("")
    const [transmission,setTransmission] = useState("")
    const [engine,setEngine] = useState("")
    const [horsepower,setHorsepower]= useState("")
    const [torque,setTorque] = useState("")
    const [drivetrain,setDrivetrain]= useState("")
    const [error, setError] = useState("")
    const [sucessMsg, setSucessMessage] = useState("")
    const navigate = useNavigate()

    const handleImageChange = (e) => {
        setImage(e.target.value);
      };
    async function postNewCars() {
        const newCars = {
            Image: image,
            make,
            model,
            price,
            color,
            fuelType,
            mileage,
            transmission,
            engine,
            horsepower,
            torque,
            drivetrain
        }
        const res = await fetch(`https://capstonebackend-47kj.onrender.com/cars/add`, {
            method: "POST",
            body: JSON.stringify(newCars),
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token,
            }
        });

        const data = await res.json();
        if (!data.data) {
            setError(data.message)
            setSucessMessage("")
        }
        setUserData([...userData, data.data])
        setSucessMessage(data.message)
        navigate("/user")
    }

    return (
        <Base>
            <div className="box-part">
                <div className="forms">
                {/* <img src={Image} alt="Car" style={{ width: "200px", height: "200px", marginBottom: "10px" }} /> */}
                    <TextField
                        label="Image"
                        variant="outlined"
                        fullWidth
                        sx={{ m: 1 }}
                        placeholder="Enter the image url"
                        //   src={image} alt="image" 
                        value={image}  
                        onChange={handleImageChange}
                        type="text"
                    />

                    <TextField label="Make" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the make"
                        type="text"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                    />
                    <TextField label="Model" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the model"
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                    <TextField label="Price" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the price"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField label="Color" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the color"
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <TextField label="Fueltype"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter the fueltype"
                        type="text"
                        value={fuelType}
                        onChange={(e) => setFueltype(e.target.value)}
                    />
                     
                    <TextField label="Mileage"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter the mileage"
                        type="text"
                        value={mileage}
                        onChange={(e) =>setMileage(e.target.value)}
                    />
                     
                    <TextField label="Transmission"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter thetransmission"
                        type="text"
                        value={transmission}
                        onChange={(e) => setTransmission(e.target.value)}
                    />
                     
                    <TextField label="Engine"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter the engine"
                        type="text"
                        value={engine}
                        onChange={(e) => setEngine(e.target.value)}
                    />
                     
                    <TextField label="Horsepower"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter the horsepower"
                        type="text"
                        value={horsepower}
                        onChange={(e) =>setHorsepower(e.target.value)}
                    />
                    
                    <TextField label="Torque"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter thetorque"
                        type="text"
                        value={torque}
                        onChange={(e) => setTorque(e.target.value)}
                    />
                     
                    <TextField label="Drivetrain"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter the drivetrain"
                        type="text"
                        value={drivetrain}
                        onChange={(e) => setDrivetrain(e.target.value)}
                    />

                    <Button
                        type="Submit" variant="contained"
                        onClick={postNewCars}
                    >Add cars</Button>

                    {error ?
                        <Typography color={"danger"}>
                            {error}
                        </Typography> : ""}

                    {sucessMsg ?
                        <Typography color={"danger"}>
                            {sucessMsg}
                        </Typography> : ""}
                </div>
            </div>
        </Base>
    )
}

export default AddCars