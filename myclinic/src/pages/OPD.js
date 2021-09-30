import React from "react";
import { useState } from "react";
import axios from "axios";

const OPD = () => {
  const emptyForm = {
    patient_name: "",
    patient_address: "",
    patient_age: "",
    patient_phone: "",
    patient_gender: "Male",
    date: "",
    consulting_doctor: "Dr Anup Padamwar",
    patient_fee: 200,
    patient_visit: "First Visit",
  };
  const [formData, updateFormdata] = useState(emptyForm);

  function handleChange(e) {
    updateFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const onGenerate = async (e) => {
    e.preventDefault();
    //Using fetch
    // const response = await fetch("http://localhost:3030/patientregistration", {
    //   method: "POST",
    //   origin: "cors",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    //Using axios

    const response = await axios.post(
      "http://localhost:3030/patientregistration",
      formData
    );
    const data = response.data;
    window.alert(`${data.data.patient_name} saved successfully !!`);
  };
  return (
    <section>
      <form>
        <div className="form-group row mb-2">
          <label htmlFor="patient-name" className="col-sm-2 col-form-label">
            Patient Name
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="patient_name"
              placeholder="Patient Name"
              name="patient_name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="address" className="col-sm-2 col-form-label">
            Address
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
              name="patient_address"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="age" className="col-sm-2 col-form-label">
            Age
          </label>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Age"
              name="patient_age"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Phone"
              name="patient_phone"
              onChange={handleChange}
            />
          </div>
        </div>
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="patient_gender"
                  id="male"
                  value="Male"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="patient_gender"
                  id="female"
                  value="Female"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group row mb-2">
          <label htmlFor="date" className="col-sm-2 col-form-label">
            Date
          </label>
          <div className="col-sm-2">
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="consult-fee" className="col-sm-2 col-form-label">
            Consultation Fee
          </label>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control"
              id="fee"
              name="patient_fee"
              defaultValue="200"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="doctor" className="col-sm-2 col-form-label">
            Doctor
          </label>
          <div className="col-sm-3">
            <select
              className="form-control"
              id="doctor"
              name="consulting_doctor"
              onChange={handleChange}
            >
              <option>Dr Anup Padamwar</option>
              <option>Dr Ravikiran Shinde</option>
              <option>Dr Rachna Padamwar</option>
              <option>Dr Apoorva Pawar</option>
            </select>
          </div>
        </div>
        <div className="form-group row mb-2">
          <label htmlFor="visit" className="col-sm-2 col-form-label">
            Visit
          </label>
          <div className="col-sm-3">
            <select
              className="form-control"
              id="visit"
              name="patient_visit"
              onChange={handleChange}
            >
              <option>First visit</option>
              <option>Follow up</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-4 mt-4">
            <button
              onClick={onGenerate}
              type="submit"
              className="btn btn-primary"
            >
              Generate Ticket
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default OPD;
