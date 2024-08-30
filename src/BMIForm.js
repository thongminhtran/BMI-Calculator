import React, { useState } from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
function BMIForm({ onSubmit }) {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ weight: parseFloat(weight), height: parseFloat(height), gender, age });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Weight (kg)"
                        type="number"
                        variant="outlined"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Height (cm)"
                        type="number"
                        variant="outlined"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Gender</InputLabel>
                        <Select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            label="Gender"
                            required
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Age"
                        type="number"
                        variant="outlined"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                        Calculate BMI
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default BMIForm;