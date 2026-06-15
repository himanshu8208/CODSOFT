const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your local MongoDB connection string if different
mongoose.connect('mongodb://127.0.0.1:27017/jobboard');

const JobSchema = new mongoose.Schema({
    title: String,
    company: String,
    description: String,
    location: String
});
const Job = mongoose.model('Job', JobSchema);

// Route to get jobs
app.get('/api/jobs', async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

// Route to add a job (for testing)
app.post('/api/jobs', async (req, res) => {
    const newJob = new Job(req.body);
    await newJob.save();
    res.json(newJob);
});

app.listen(5000, () => console.log('Server running on port 5000'));