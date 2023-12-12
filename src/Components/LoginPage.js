// // import React, { useState } from "react"
// // import Base from "../Base/Base"
// // import { Button, TextField, Typography } from "@mui/material"
// // import { Link, useNavigate } from "react-router-dom"
// // const LoginPage = () => {
// //     const navigate = useNavigate()
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [error, setError] = useState("");

// //     const handleLogin = async () => {
// //         const userDetails = {
// //             email,
// //             password
// //         }
// //         const response = await fetch(`https://capstonebackend-47kj.onrender.com/user/login`, {
// //             method: "POST",
// //             body: JSON.stringify(userDetails),
// //             headers: {
// //                 "Content-type": "application/json"

// //             }
// //         });

// //         const data = await response.json()
// //         if (data.token) {
// //             setError("")
// //             localStorage.setItem("token", data.token)
// //             navigate("/")
// //         } else {
// //             setError(data.message)
// //         }
// //     }

// //     return (
// //         <Base>
// //             <div className="box">
// //                 <div className="form">
// //                     <TextField label="email" variant="outlined" fullWidth sx={{ m: 1 }}
// //                         placeholder="Enter the email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         type="email"
// //                     />
// //                     <TextField label="password" variant="outlined" fullWidth sx={{ m: 1 }}
// //                         placeholder="Enter the password"
// //                         type="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                     />
// //                     <Button
// //                         type="submit"
// //                         variant="contained"
// //                         onClick={handleLogin}
// //                     >Login</Button>
// //                     {error ?
// //                         <Typography className="error" color={"danger"}>
// //                             {error}
// //                         </Typography> : ""}
// //                 </div>
// //             </div>
// //         </Base>

// //     )
// // }

// // export default LoginPage



// import React, { useState } from "react"
// import Base from "../Base/Base"
// import { Button, TextField, Typography } from "@mui/material"
// import { Link, useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';

// const LoginPage = () => {
//     const navigate = useNavigate()
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleLogin = async () => {
//         const userDetails = {
//             email,
//             password
//         }

//         try {
//             const response = await fetch(`https://capstonebackend-47kj.onrender.com/user/login`, {
//                 method: "POST",
//                 body: JSON.stringify(userDetails),
//                 headers: {
//                     "Content-type": "application/json"
//                 }
//             });

//             const data = await response.json();
//             // console.log("API Response:", data);
//             if (data.token) {
//                 setError("");
//                 localStorage.setItem("token", data.token);
//                 navigate("/");
//             } else {
//                 setError(data.message);

//                 if (data.message) {
//                     toast.error("User not found. Please sign up.");
//                 }
//             }
//         } catch (error) {
//             console.error("Error during login:", error);
//             setError("An error occurred during login. Please try again.");
//         }
//     };

//     return (

//         // <Base>

//         //     <TextField label="email" variant="outlined" fullWidth sx={{ m: 1 }}
//         //         placeholder="Enter the email"
//         //         value={email}
//         //         onChange={(e) => setEmail(e.target.value)}
//         //         type="email"
//         //     />
//         //     <TextField label="password" variant="outlined" fullWidth sx={{ m: 1 }}
//         //         placeholder="Enter the password"
//         //         type="password"
//         //         value={password}
//         //         onChange={(e) => setPassword(e.target.value)}
//         //     />



//         //     <Button
//         //         className="login-button"
//         //         type="submit"
//         //         variant="contained"
//         //         onClick={handleLogin}
//         //     >Login</Button>
//         //     {error ?
//         //         <Typography color={"danger"}>
//         //             {error}
//         //         </Typography> : ""}

//         // </Base >
//         <Base>
//             <div className="box">
//                 <div className="form">
//                     <p className="lo">LOGIN</p>
//                     <TextField label="email" variant="outlined" fullWidth sx={{ m: 1 }}
//                         placeholder="Enter the email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         type="email"
//                     />
//                     <TextField label="password" variant="outlined" fullWidth sx={{ m: 1 }}
//                         placeholder="Enter the password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         onClick={handleLogin}
//                     >Login</Button>
//                     {error ?
//                         <Typography className="error" color={"danger"}>
//                             {error}
//                         </Typography> : ""}
//                     <div className="lt">
//                         <span>Don't have an account? </span>
//                         <Link to="/signup">Sign Up</Link>
//                     </div>
//                     <div>
//                         <h2>For Testing:</h2>
//                         <h3>Email: vjeeva@gmail.com   </h3>
//                         <h3>Password: 12345  </h3>
//                     </div>
//                 </div>
//             </div>
//         </Base>

//     )
// }




// export default LoginPage

import React, { useState } from "react";
import Base from "../Base/Base";
import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        const userDetails = {
            email,
            password
        };

        try {
            const response = await fetch(`https://capstonebackend-47kj.onrender.com/user/login`, {
                method: "POST",
                body: JSON.stringify(userDetails),
                headers: {
                    "Content-type": "application/json"
                }
            });

            const data = await response.json();
            if (data.token) {
                setError("");
                localStorage.setItem("token", data.token);
                navigate("/");
                toast.success("Login successful!");
            } else {
                setError(data.message);
                toast.error(data.message || "An error occurred during login. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred during login. Please try again.");
            toast.error("An error occurred during login. Please try again.");
        }
    };
    const handleDemoLogin = () => {

        setEmail("vjeeva@gmail.com");
        setPassword("12345");
    }
    return (
        <Base>
            <div className="box">
                <div className="form">
                    <p className="lo">LOGIN</p>
                    <TextField label="email" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                    <TextField label="password" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleLogin}
                    >Login</Button>
                    {error &&
                        <Typography className="error" color={"danger"}>
                            {error}
                        </Typography>
                    }
                    <Button
                        className="demo"
                        variant="contained"
                        onClick={handleDemoLogin}
                        sx={{ mt: 2 }}
                    >
                        Demo Credentials
                    </Button>
                    <div className="lt">
                        <span>Don't have an account? </span>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    {/* <div>
                        <h2>For Testing:</h2>
                        <h3>Email: vjeeva@gmail.com   </h3>
                        <h3>Password: 12345  </h3>
                    </div> */}

                </div>
            </div>
        </Base>
    );
};

export default LoginPage;
