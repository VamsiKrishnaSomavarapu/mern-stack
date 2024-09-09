import React, { useEffect, useState } from 'react';
import { Grid, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/user", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    if (token) {
      fetchUser();
    } else {
      navigate("/login");
    }
  }, [navigate, token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Grid container spacing={2} style={{ width: '90%', margin: '10px', marginTop: '50px' }}>
      <Button variant="contained" color="primary" onClick={handleLogout} style={{ marginBottom: 20 }}>
        Logout
      </Button>
      <Paper elevation={3} style={{ padding: 20 }}>
        {user && (
          <>
            <Typography variant="h5" gutterBottom>
              User Details
            </Typography>
            <Typography variant="body1">
              <strong>First Name:</strong> {user.firstname}
            </Typography>
            <Typography variant="body1">
              <strong>Last Name:</strong> {user.lastname}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="body1">
              <strong>Role:</strong> {user.role}
            </Typography>
          </>
        )}
      </Paper>
    </Grid>
  );
};
export default Dashboard;
