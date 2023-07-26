import React, { useEffect, useState } from "react"
import Base from "../Base/Base"
import { useNavigate, useParams } from "react-router-dom"
import { Button, TextField, Typography } from "@mui/material"
const EditCars = ({ userData, setUserData }) => {
    const [image, setImage] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [fueltype, setFueltype] = useState("")
    const [mileage,setMileage] = useState("")
    const [transmission,setTransmission] = useState("")
    const [engine,setEngine] = useState("")
    const [horsepower,setHorsepower]= useState("")
    const [torque,setTorque] = useState("")
    const [drivetrain,setDrivetrain]= useState("")
    const [error, setError] = useState("")
    const [sucessMsg, setSucessMessage] = useState("")
    const { id, token } = useParams();
    const navigate = useNavigate()
    console.log()
    useEffect(() => {
        const data = userData?.find((data) => data._id === id)
        if (data) {
            setMake(data.data.make)
            setModel(data.data.model)
            setPrice(data.data.price)
            setColor(data.data.color)
            setFueltype(data.data.fueltype)
            setMileage(data.data.mileage)
            setTransmission(data.data.transmission)
            setEngine(data.data.engine)
            setHorsepower(data.data.horsepower)
            setTorque(data.data.torque)
            setDrivetrain(data.data.drivetrain)
        }
    }, [id, userData])

    async function handleEditCars() {
        const editedNotes = {
            make,
            model,
            price,
            color,
            fueltype,
            mileage,
            transmission,
            engine,
            horsepower,
            torque,
            drivetrain
        }

        const res = await fetch(`https://capstonebackend-47kj.onrender.com/cars/edit/${id}`, {
            method: "PUT",
            body: JSON.stringify(editedNotes),
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
        const userindex = userData?.findIndex((data, idx) => data._id === id);
        userData[userindex] = data.data;
        await setUserData([...userData])
        setSucessMessage(data.message)
    }

    return (
        <Base>
            <form>
                <TextField
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <TextField
                    label="make"
                    variant="outlined"
                    fullWidth
                    sx={{ m: 1 }}
                    placeholder="Enter the make"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    type="text"
                />

                <TextField
                    label="model"
                    variant="outlined"
                    fullWidth
                    sx={{ m: 1 }}
                    placeholder="Enter the package"
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
                <TextField
                    label="price"
                    variant="outlined"
                    fullWidth
                    sx={{ m: 1 }}
                    placeholder="Enter the price"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                    label="color"
                    variant="outlined"
                    fullWidth
                    sx={{ m: 1 }}
                    placeholder="Enter the color"
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <TextField
                    label="fueltype"
                    variant="outlined"
                    fullWidth
                    sx={{ m: 1 }}
                    placeholder="Enter the fueltype"
                    type="text"
                    value={fueltype}
                    onChange={(e) => setFueltype(e.target.value)}
                />
                  <TextField label="mileage"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter the mileage"
                        type="text"
                        value={mileage}
                        onChange={(e) =>setMileage(e.target.value)}
                    />
                     
                    <TextField label="transmission"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter thetransmission"
                        type="text"
                        value={transmission}
                        onChange={(e) => setTransmission(e.target.value)}
                    />
                     
                    <TextField label="engine"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter the engine"
                        type="text"
                        value={engine}
                        onChange={(e) => setEngine(e.target.value)}
                    />
                     
                    <TextField label="horsepower"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter the horsepower"
                        type="text"
                        value={horsepower}
                        onChange={(e) =>setHorsepower(e.target.value)}
                    />
                    
                    <TextField label="torque"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter thetorque"
                        type="text"
                        value={torque}
                        onChange={(e) => setTorque(e.target.value)}
                    />
                     
                    <TextField label="drivetrain"
                        variant="outlined" fullWidth sx={{ m: 1 }}
                        //    inputProps={{sx:{height:}}}
                        placeholder="Enter the drivetrain"
                        type="text"
                        value={drivetrain}
                        onChange={(e) => setDrivetrain(e.target.value)}
                    />

                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleEditCars}
                >Edit Notes</Button>

                <Button
                    type="submit"
                    variant="contained"
                    onClick={() => navigate("/user")}
                >Home</Button>

                {error ?
                    <Typography color={"danger"}>
                        {error}
                    </Typography> : ""}

                {sucessMsg ?
                    <Typography color={"success"}>
                        {sucessMsg}
                    </Typography> : ""}
            </form>

        </Base>
    )
}

export default EditCars
