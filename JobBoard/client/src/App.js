import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetching jobs from your backend
    axios.get('http://localhost:5000/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Job Board</h1>
        <p className="text-gray-600 mt-2">Find your next opportunity</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-blue-600 font-semibold mb-2">{job.company}</p>
            <p className="text-gray-600 text-sm mb-4">{job.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">{job.location}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;