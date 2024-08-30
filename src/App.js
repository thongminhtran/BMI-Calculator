import React, { useState } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import BMIForm from './BMIForm';
import BMIResult from './BMIResult';

function App() {
  const [bmi, setBmi] = useState(null);

  const handleFormSubmit = (data) => {
    const { weight, height } = data;
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2);
    setBmi(bmiValue);
  };

  return (
      <Container component="main" maxWidth="xs" style={{ display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
        <Paper elevation={3} style={{ padding: '16px', textAlign: 'center', width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            BMI Tracker
          </Typography>
          <Box mt={4}> {/* Adjust the margin-top value to control spacing */}
            <BMIForm onSubmit={handleFormSubmit} />
          </Box>
          {bmi && <BMIResult bmi={bmi} />}
        </Paper>
      </Container>  );
}

export default App;