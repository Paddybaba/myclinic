import React from "react";
import StatsTab from "../components/tabContents/StatsTab";

import Toprow from "../components/Toprow";
const Statistics = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <Toprow />
            {/* <div className="col-12 text-center fs-2">Statistics</div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-auto">
            <StatsTab />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
