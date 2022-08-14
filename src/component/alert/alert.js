import './alert.css';

function Alert({img , color , title,onClick}){
    return (
    <div className="over-lay-alert">
         <button onClick={() => onClick()} className="over_lay-close"><i className="fa-solid fa-xmark"></i></button>
         <div className="alert_wrapper">
         <img src={img} />
         <h3 className="alert_title" style={{color: color}}>{title}</h3>
         </div>
    </div>
    )
}

export default Alert;