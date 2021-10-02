import printJS from "print-js";
import React from "react";

const Printable = ({ formData }) => {
  const { patient_name, patient_address, patient_age } = formData;

  const onPrint = (e) => {
    e.preventDefault();
    printJS({
      printable: "forPrint",
      type: "html",
      targetStyles: ["*"],
    });
  };
  return (
    <div>
      <div className="hidden">
        <div id="forPrint">Whatever you like to print</div>
      </div>
      <button onClick={onPrint}>Print</button>
    </div>
  );
};
export default Printable;
