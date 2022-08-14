import "./job-item.css";

function JobItem({name ,item , onClick , onChange}) {
  return (
    <div className="job_item">
      <div className="job_item-left">
        <input onChange={() => onChange(item) } className="job_item-checkbox" type="checkbox" />
        <p className="job_name">{name}</p>
      </div>
      <button onClick={() => onClick(item)} className="btn_delete-job">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default JobItem;
