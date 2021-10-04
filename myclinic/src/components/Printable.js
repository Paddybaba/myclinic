import printJS from "print-js";
import React, { useEffect } from "react";
import Receipt from "./Receipt";

const Printable = ({ formData }) => {
  const { patient_name, patient_address, patient_age } = formData;
  var divContent;
  useEffect(() => {
    divContent = document.getElementById("forPrint").innerHTML;
  }, []);

  const letsPrint = (e) => {
    var backup = document.body.innerHTML;
    divContent = document.getElementById("forPrint").innerHTML;
    document.body.innerHTML = divContent;
    window.print();
    document.body.innerHTML = backup;
  };

  return (
    <div className=" d-flex justify-content-center">
      <div className="hidden">
        <div id="forPrint">
          <Receipt patientData={formData} />
        </div>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => letsPrint("forPrint")}
      >
        Print Receipt
      </button>
    </div>
  );
};
export default Printable;
