import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PatientList from "./PatientList";

const StatsTab = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto small-tab">
            <Tabs>
              <TabList>
                <Tab>Patient List</Tab>
                <Tab>Statistics</Tab>
                <Tab>Inventory</Tab>
              </TabList>

              <TabPanel>
                <PatientList />
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsTab;
