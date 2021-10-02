import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return <div>Ab to print hoja</div>;
  }
}

const PrintPatient = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div id="print">
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};
render(<ComponentToPrint />, document.getElementById("root"));
export default PrintPatient;
