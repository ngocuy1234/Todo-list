import './button.css';

function Button({onClick , title , style}) {
  return (
    <div className="delete_all-wrapper">
      <button style={style} onClick={() => onClick()} className="delete_all-job">{title}</button>
    </div>
  );
}

export default Button;
