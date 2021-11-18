import React from "react";
import axios from "axios";
import { useState } from "react";
const Graphs = () => {
  const [fullData, setData] = useState([]);
  const [totalPatients, setTotal] = useState(0);
  const onShow = async () => {
    const response = await axios.post("http://localhost:3030/getpatients");
    const data = await response.data;
    setData(data);

    setTotal(data.length);
    return data;
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <button onClick={onShow}>Show</button>
            <div>Patient Statistics </div>
            <div>Total Patients Seen : {totalPatients}</div>
            <div>Today : </div>
            <div>Revenue Generated : {totalPatients * 200} rupees</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphs;
