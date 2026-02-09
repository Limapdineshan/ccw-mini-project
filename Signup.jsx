import React, { useState } from "react";
import {
  Box, Grid, TextField, Typography, Button,
  FormControl, InputLabel, Select, MenuItem,
  Card, CardContent, Link
} from "@mui/material";
import heroBG from "../assets/hero.webp";
import { signup } from "../api/auth"; 

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    fCode: ""
  });

  const [role, setRole] = useState("");

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: role,
        facultyCode: formData.fCode
      };

      const res = await signup(payload);

      alert(res.data.message); 
      window.location.href = "/login";

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "radial-gradient(circle at top, #0f3c4c 0%, #081f29 70%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Grid container>
       
        <Grid item xs={12} md={6}>
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
              <Typography variant="h3" fontWeight={800} color="#008080" mb={3}>
                Create your account
              </Typography>

              <form onSubmit={handleSubmit}>
                {["name", "email", "password"].map((field) => (
                  <TextField
                    key={field}
                    label={
                      field === "name"
                        ? "Full Name"
                        : field.charAt(0).toUpperCase() + field.slice(1)
                    }
                    type={field === "password" ? "password" : "text"}
                    name={field}
                    fullWidth
                    value={formData[field]}
                    onChange={handleChange}
                    sx={{
                      mb: 3,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        borderRadius: "15px",
                        "& fieldset": { borderColor: "#009688", borderWidth: 2 },
                        "&:hover fieldset": { borderColor: "#00695c" },
                        "&.Mui-focused fieldset": { borderColor: "#004d40" },
                      },
                    }}
                  />
                ))}

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Role</InputLabel>
                  <Select
                    value={role}
                    label="Role"
                    onChange={(e) => setRole(e.target.value)}
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "15px",
                      "& fieldset": { borderColor: "#009688", borderWidth: 2 },
                    }}
                  >
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="teacher">Teacher</MenuItem>
                  </Select>
                </FormControl>

                {role === "student" && (
                  <TextField
                    label="Faculty Code"
                    name="fCode"
                    fullWidth
                    value={formData.fCode}
                    onChange={handleChange}
                     sx={{
                      mb: 3,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        borderRadius: "15px",
                        "& fieldset": { borderColor: "#009688", borderWidth: 2 },
                        "&:hover fieldset": { borderColor: "#00695c" },
                        "&.Mui-focused fieldset": { borderColor: "#004d40" },
                      },
                    }}
                  />
                )}

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "25px",
                    background:
                      "linear-gradient(135deg, #00c6a7 0%, #1e4d92 100%)",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    py: 1.5,
                  }}
                >
                  Sign Up
                </Button>
              </form>

              <Typography sx={{ mt: 4, textAlign: "center" }}>
                Already have an account?{" "}
                <Link href="/login" sx={{ fontWeight: 900, color: "#008080" }}>
                  Login
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
