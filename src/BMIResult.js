import React from 'react';
import { Typography, Box } from '@mui/material';

function BMIResult({ bmi }) {
    let category;

    if (bmi < 18.5) category = 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) category = 'Normal weight';
    else if (bmi >= 25 && bmi < 29.9) category = 'Overweight';
    else category = 'Obesity';

    return (
        <Box mt={2}>
            <Typography variant="h6">
                Your BMI: {bmi}
            </Typography>
            <Typography variant="body1">
                Category: {category}
            </Typography>
        </Box>
    );
}

export default BMIResult;