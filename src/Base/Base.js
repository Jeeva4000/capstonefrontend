import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Base({ title, description, children }) {
    //const history = useHistory() v5
    function handleLogout() {
        // localStorage.setItem(key, value);
        // localStorage.setItem('userToken', 'xyz12345');
        localStorage.setItem('userToken', '');
        navigate("/login")
    }
    const navigate = useNavigate()

    return (
        <div className='main-container'>
            <header>
                <nav>
                    <AppBar position="static">
                        <Toolbar variant="dense" >
                            <Typography sx={{ mr: 2 }}>
                                CARS
                            </Typography>
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={() => navigate("/")}
                                aria-label="dashboard" sx={{ mr: 2 }}>
                                Dashboard
                            </IconButton>

                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="cars"
                                onClick={() => navigate("/user")}
                                sx={{ mr: 2 }}>
                                MyAccount
                            </IconButton>

                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="add cars"
                                onClick={() => navigate("/login")}
                                sx={{ mr: 2 }}>
                                Login
                            </IconButton>


                            {/* <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="add cars"
                                onClick={() => navigate("/add")}
                                sx={{ mr: 2 }}>
                                AddCars
                            </IconButton> */}

                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="add cars"
                                onClick={() => navigate("/signup")}
                                sx={{ mr: 2 }}>
                                Signup
                            </IconButton>

                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="add cars"
                                onClick={handleLogout}
                                sx={{ mr: 2 }}>
                                logout
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                </nav>
            </header>
            <main>
                <h1>{title}</h1>
                <h4>{description}</h4>
                <div className='contents'>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Base