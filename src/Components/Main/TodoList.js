import { useState } from "react";
import "./styles.css";
function TodoList() {
  const [job, setJob] = useState(" ");
  const [jobs, setJobs] = useState(() => {
    const jobsData = JSON.parse(localStorage.getItem("jobs"));
    return jobsData || [];
  });
  function changeHandle(e) {
    setJob(e);
  }

  function handleClick() {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
    setJob(" ");
  }

  function deleteJob(idx) {
    setJobs(() => {
      const data = jobs.filter((job, index) => {
        return index !== idx;
      });
      localStorage.setItem("jobs", JSON.stringify(data));
      return data;
    });
  }
  return (
    <div className="App">
      <input value={job} onChange={(e) => changeHandle(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            {job}
            <button
              onClick={() => {
                deleteJob(index);
              }}
              style={{ margin: "20px" }}
            >
              Deletes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
