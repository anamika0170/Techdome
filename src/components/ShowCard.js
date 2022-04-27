import React from "react";
import "../style/show.style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const ShowCard = ({
  id,
  name,
  image,
  lounch_year,
  sucessful_lounch,
  lounch_landing,
}) => {
    const formatDate = (lounch_landing) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(lounch_landing).toLocaleDateString(undefined, options)
      }
  return (
    <div className="card px-md-5 mt-5 mx-2">
      <div className="d-flex justify-content-center mt-2">
        <img src={image} className="image" />
      </div>
      <div className="heading">Mission Id : </div><span>{id}</span>
      <div className="heading">Lounch Year : </div><span>{lounch_year}</span>
      <div className="heading">Successfully Lounch : </div><span>{sucessful_lounch}</span>
      <div className="heading">Successfull landing : </div><span>{formatDate(lounch_landing)}</span>
    </div>
  );
};

export default ShowCard;
