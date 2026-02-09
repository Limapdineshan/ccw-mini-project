import { useNavigate } from "react-router-dom";
import { Box, Card, Typography, Button, Grid,AppBar,
  Toolbar } from "@mui/material";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const facultyCode = "1234"; 

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        background:
         "radial-gradient(circle at top, #0f3c4c 0%, #081f29 70%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "top",
        paddingTop: "180px",
        px: 4,
      }}
    >
      <AppBar position="fixed" sx={{ background: 'rgb(255, 242, 254)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'rgb(4, 4, 4)' }}>
            The Learning Portal
          </Typography>
          
          <Button color="inherit" variant="outlined" sx={{ ml: 2, borderColor: '#000000ff', color: 'rgb(4, 4, 4)', fontSize: '16px', fontWeight: 'bold' }}>Logout</Button>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ width: "100%", maxWidth: 1100 }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          color="white"
          textAlign="center"
          mb={2}
        >
          Teacher Dashboard
        </Typography>

        <Typography
          textAlign="center"
          sx={{ color: "rgba(255,255,255,0.75)", mb: 6 ,fontSize: "24px"}}
        >
          Teaching Code: <b>{facultyCode}</b>
        </Typography>

        <Grid container spacing={5} justifyContent="center" mt={"100px"}>
          
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 5,
                borderRadius: 4,
                backgroundColor: "rgba(255,255,255,0.08)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                textAlign: "center",
              }}
            >
              <Typography  variant="h4"
              fontWeight="bold"
              color="white"
              gutterBottom
            >
                 Manage Questions
              </Typography>

              <Typography
                sx={{ color: "rgba(255,255,255,0.75)", mb: 4 }}
              >
                Add, edit or delete test questions
              </Typography>

              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{
                        background: "linear-gradient(90deg, #00c6a7, #0456a3)", fontSize: "15px", fontWeight: "bold",
                        borderRadius: "10px"
                      }}
                onClick={() => navigate("/GateDashboard")}
              >
               Manage
              </Button>
            </Card>
          </Grid>

         
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 5,
                borderRadius: 4,
                backgroundColor: "rgba(255,255,255,0.08)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                textAlign: "center",
              }}
            >
              <Typography variant="h4"
              fontWeight="bold"
              color="white"
              gutterBottom>
                    Student Analysis
              </Typography>

              <Typography
                sx={{ color: "rgba(255,255,255,0.75)", mb: 4 }}
              >
                View marks, accuracy & send messages
              </Typography>

              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{
                        background: "linear-gradient(90deg, #00c6a7, #0456a3)", fontSize: "15px", fontWeight: "bold",
                        borderRadius: "10px"
                      }}
                onClick={() => navigate("/CCWDashboard")}
              >
                Analyse
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
