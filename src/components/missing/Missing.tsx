import "./Missing.scss";

const Missing = () => {
  return (
    <div className="missing">
      <div className="letters">
        <h1 className="l1">Error 404! </h1>
        <br />
        <h1 className="l2">Page not found</h1>
      </div>
      <img className="errlogo" src={"/missing/errorLogo.svg"} alt="" />
    </div>
  );
};

export default Missing;
