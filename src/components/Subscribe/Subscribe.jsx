import "./Subscribe.scss";
import words from "../../words";

const Subscribe = () => {
  const { subscribe_Btn, subscribe } = words;
  return (
    <div className="subscribe">
      <div className="subscribe__wrapper">
        <h3>{subscribe}</h3>
        <div className="subscribe__join">
          <input type="text" placeholder="Email Address..." />
          <button>{subscribe_Btn}</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
