import "./App.css";
import JobItem from "./component/job-item/job-item.js";
import Button from "./component/button/button.js";
import { useState } from "react";
import Alert from "./component/alert/alert";

function App() {
  const configAlert = {
    img : 'https://eoinduffy.me/images/home/proj-ein-sun.gif',
    title:'Đã hoàn thành phát huy nhé !!!',
    color:  '#1A4D2E'
   }
  const [job, setJob] = useState("");
  const [alert, setAlert] = useState(
    configAlert
  );
  const [status , setStatus] = useState("");
  const [check, setCheck] = useState([]);
  const [jobs, setJobs] = useState(() => {
    let storage = localStorage.getItem("jobs");
    if (storage == null) {
      return [];
    } else {
      const getJobLocal = JSON.parse(storage);
      return getJobLocal;
    }
  });
  // Function use common save data in localstorage
  const saveLocal = (arr) => {
    const jobsString = JSON.stringify(arr);
    window.localStorage.setItem("jobs", jobsString);
  };

  // Fuction save data
  const handleSave = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      saveLocal(newJobs);
      return newJobs;
    });
    setJob("");
  };

  // Function delete all data
  const handelDeleteAll = () => {
    localStorage.removeItem("jobs");
    setJobs([]);
  };

  // Function delete
  const handelDelete = (index) => {
    const jobAferDelete = jobs.filter((item, ind) => ind !== index);
    setJobs(jobAferDelete);
    saveLocal(jobAferDelete);
  };

  const handelCheck = (index) => {
    // console.log(index);
    setStatus(false);
    setCheck((prev) => {
       if(check.includes(index)){
        return check.filter((item) => item !== index);
       }else{
        check.length === jobs.length - 1 && setStatus(!status);
        setAlert(configAlert);
         return [...prev , index]
       }
    });
    
  }

  const handelEnd = () => {
    if(check.length < jobs.length){
     setAlert( {
    img : 'https://i.pinimg.com/originals/62/1a/88/621a886cacc055559415a9c7c559996b.gif',
    title:'Không hoàn thành công việc rồi !!!',
    color: '#8E0007'
     })
      setStatus(true);
    }
  }

  const handleClose = () => {
    setStatus(false);
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Danh sách các công việc trong ngày</h1>
        <div className="form_add-wrapper">
          <input
            className="form_add-input"
            onChange={(e) => setJob(e.target.value)}
            value={job}
            placeholder="Thêm công việc vào đây ...."
            type="text"
          />
          <button onClick={handleSave} className="form_add-button">
            Thêm việc
          </button>
        </div>
        <div className="jobs_wrapper">
          {jobs.map((item, index) => (
            <JobItem
              key={index}
              onClick={handelDelete}
              item={index}
              name={item}
              onChange={handelCheck}
            />
          ))}
        </div>
      </div>
      <Button style={{marginBottom: '70px',backgroundColor: '#2B7A0B'}} title="Kết thúc công việc" onClick={handelEnd} />
      <Button style={{ bottom: '30px', backgroundColor: '#fa415d'}} title="Xoá công việc" onClick={handelDeleteAll} />
      {status && <Alert img={alert.img}  color={alert.color} title={alert.title} onClick={handleClose} />}
    </div>
  );
}

export default App;
