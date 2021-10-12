import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Graphs from "./Graphs";
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
                <Graphs />
              </TabPanel>
              <TabPanel>
                <h3 className="text-center">Coming soon ....</h3>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsTab;
