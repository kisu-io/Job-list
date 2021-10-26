import './App.css';
import data from './data.json';
import JobCard from './components/JobCard';
import Header from './components/Header';
function App() {
  const jobData = data.jobs.slice(0, 20);
  console.log(jobData);
  return (
    <div className="App">
      <Header />
      <div className="card">
        {jobData.map((i) => {
          return <JobCard key={i.id} data={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
