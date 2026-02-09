 import React, { useState } from "react";
import {
  Box, Grid, TextField, Typography, Button,
  Card, CardContent, Link
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import heroBG from "../assets/hero.webp";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      // Redirect based on role
      if (res.data.role === "student") {
        navigate("/StudentDashboard");
      } else if (res.data.role === "teacher") {
        navigate("/TeacherDashboard");
      } else {
        alert("Unknown role");
      }

    } catch (error) {
      alert("Invalid email or password");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", minWidth: "100vw",
        background:  "radial-gradient(circle at top, #0f3c4c 0%, #081f29 70%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >

      <Grid container>

       
        <Grid item xs={12} md={6} >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              minHeight: { xs: 250, md: "100%" },
              minWidth: "500px",
              backgroundImage: `url(${heroBG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: { md: "20px", xs: "0px" },

            }}
          />
        </Grid>


        
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              width: "90%",
              maxWidth: 850,
              borderTopRightRadius: "20px",
              borderBottomRightRadius: { md: "20px", xs: "0px" },
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              bgcolor: "white",
            }}
          >
            <CardContent sx={{ px: 6, py: 6 }}>
              <Typography
                variant="h3"
                fontWeight={800}
                color="#008080"
                mb={4}
                textAlign="center"
              >
                Welcome Back!
              </Typography>

              <form onSubmit={handleSubmit}>

               
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      borderRadius: "15px",
                      "& fieldset": { borderColor: "#009688", borderWidth: 2 },
                      "&:hover fieldset": { borderColor: "#00695c", borderWidth: 2 },
                      "&.Mui-focused fieldset": { borderColor: "#004d40", borderWidth: 2 },
                    },
                  }}
                />

               
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  sx={{
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                      borderRadius: "15px",
                      "& fieldset": { borderColor: "#009688", borderWidth: 2 },
                      "&:hover fieldset": { borderColor: "#00695c", borderWidth: 2 },
                      "&.Mui-focused fieldset": { borderColor: "#004d40", borderWidth: 2 },
                    },
                  }}
                />

                
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    background: "linear-gradient(90deg, #00c6a7, #0456a3)",
                    borderRadius: "15px",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    py: 1.5,
                    "&:hover": { opacity: 0.9 },
                  }}
                >
                  LOGIN
                </Button>
              </form>

              
              <Typography sx={{ mt: 4, textAlign: "center", fontSize: "1.1rem" }}>
                New user?{" "}
                <Link href="/signup" sx={{ fontWeight: 800, color: "#0456a3" }}>
                  Signup
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </Box>
  );
}
