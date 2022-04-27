import React, { useState } from "react";
import axios, { Axios } from "axios";
import Show from "../components/Show";
import "../style/homePage.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import PN from '../images/pageNot.png'

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const onInputChange = (ev) => {
    setSearch(ev.target.value);
    console.log(ev.target.value);
  };
  const onSearch = () => {
    axios
      .get(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${search}`
      )
      .then((result) => {
        setResult(result.data);
        console.log(result.data);
      });
  };
  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResult = () => {
    if (result && result.length === 0) {
      return <div className="w-75 h-25"><img className="w-75 h-25" src={PN}/></div>;
    }
    if (result && result.length > 0) {
      return result[0] ? (
        <Show data={result} />
      ) : (
        // result.map(item=><div key={item.flight_number}>{item. mission_name}</div>)
        <div>no data</div>
      );
    }
    return null;
  };
  return (
    <div className="w-100 h-100 homepage">
      <h1>SpaceX Lounch Programs</h1>
      <div>
        <h4>Filter</h4>

        <select
          type="select"
          onChange={onInputChange}
          value={search}
          onKeyDown={onKeyDown}
          className="select"
        >
          <option>----select Year----</option>
          <option>2011</option>
          <option>2012</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
        </select>

        <button className="btn btn-success" type="button" onClick={onSearch}>
          Search
        </button>
        {renderResult()}
      </div>
    </div>
  );
};

export default HomePage;
