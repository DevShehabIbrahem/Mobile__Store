import { Circles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner">
      <Circles
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Spinner;
