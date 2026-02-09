import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Stack,  AppBar,
  Toolbar
} from "@mui/material";

export default function CCWDashboard() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        background:
          "radial-gradient(circle at top, #0f3c4c 0%, #081f29 70%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 6
      }}
    >
      <AppBar position="fixed" sx={{ background: 'rgb(255, 242, 254)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'rgb(4, 4, 4)' }}>
            The Learning Portal
          </Typography>
          <Button color="inherit" variant="outlined" sx={{ ml: 2, borderColor: '#000000ff', color: 'green', fontSize: '16px', fontWeight: 'bold' }}>View Progress</Button>
          <Button color="inherit" variant="outlined" sx={{ ml: 2, borderColor: '#000000ff', color: 'rgb(4, 4, 4)', fontSize: '16px', fontWeight: 'bold' }}>Logout</Button>
        </Toolbar>
      </AppBar>
  <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          background:
            "radial-gradient(circle at top, #0f3c4c 0%, #081f29 70%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 4
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1400 }}>
         
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="white"
              gutterBottom
            >
              CCW Dashboard
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
              Track your preparation & attempt mock tests
            </Typography>
          </Box>

      
          <Grid container spacing={10} justifyContent="left">
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 4,
                  minHeight: 440,
                  borderRadius: 4,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.45)"
                }}
              >
                <Typography variant="h6" color="white" mb={3} fontSize={25} fontWeight="bold">
                  Mock Tests
                </Typography>

                <Stack spacing={2}>
                  {[1, 2, 3, 4].map((i) => (
                    <Box
                      key={i}
                      sx={{
                        minWidth: "300px",
                        backgroundColor: "#ffffff",
                        borderRadius: 2,
                        px: 2.5,
                        py: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <Typography fontWeight={500} fontSize={20}>
                        Mock Test {i}
                      </Typography>
                      <Button variant="contained" size="medium" sx={{
                        background: "linear-gradient(90deg, #00c6a7, #0456a3)", fontSize: "15px", fontWeight: "bold",
                        borderRadius: "10px"

                      }}>
                        Start
                      </Button>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 4,
                  minHeight: 440,
                  borderRadius: 4,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.45)"
                }}
              >
                <Typography variant="h6" color="white" mb={3} fontSize={25} fontWeight="bold">
                  Previous Year Papers
                </Typography>

                <Stack spacing={2}>
                  {[2024, 2023, 2022, 2021].map((year) => (
                    <Box
                      key={year}
                      sx={{
                        minWidth: "300px",
                        backgroundColor: "#ffffff",
                        borderRadius: 2,
                        px: 2.5,
                        py: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <Typography fontWeight={500} fontSize={20}>
                        GATE {year}
                      </Typography>
                      <Button variant="contained" size="medium" sx={{
                        background: "linear-gradient(90deg, #00c6a7, #0456a3)", fontSize: "15px", fontWeight: "bold",
                        borderRadius: "10px"

                      }}>
                        Start
                      </Button>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
