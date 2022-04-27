import React from "react";
import ShowCard from "./ShowCard";
import '../style/show.style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Show = ({ data }) => {
  return (
    <div className="showPage">
      {data.map((element) => (
        
        <ShowCard
          key={element.flight_number}
          id={element.mission_id.length>0 ? element.mission_id:"Not Available"}
          name={element.mission_name}
          //   image={element.LIN.image?element.links.mission_patch:"not found"}
          image={element.links.mission_patch?element.links.mission_patch:"image not found"}
          lounch_year={element.launch_year}
          sucessful_lounch={element.launch_success===true?"true":"false"}
          lounch_landing={element.launch_date_local}
        />
      ))}
    </div>
  );
};

export default Show;
