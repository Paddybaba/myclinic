import React from "react";

const OPD = () => {
  return (
    <section>
      <form>
        <div class="form-group row mb-2">
          <label for="patient-name" class="col-sm-2 col-form-label">
            Patient Name
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              id="patient-name"
              placeholder="Patient Name"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="address" class="col-sm-2 col-form-label">
            Address
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="Address"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="age" class="col-sm-2 col-form-label">
            Age
          </label>
          <div class="col-sm-2">
            <input
              type="number"
              class="form-control"
              id="age"
              placeholder="Age"
            />
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
            <div class="col-sm-1">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="male"
                  id="male"
                  value="Male"
                  checked
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="female"
                  id="female"
                  value="Female"
                />
                <label class="form-check-label" for="female">
                  Female
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row mb-2">
          <label for="date" class="col-sm-2 col-form-label">
            Date
          </label>
          <div class="col-sm-2">
            <input type="date" class="form-control" id="date" />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="consult-fee" class="col-sm-2 col-form-label">
            Consultation Fee
          </label>
          <div class="col-sm-2">
            <input
              type="number"
              class="form-control"
              id="consult-fee"
              defaultValue="200"
            />
          </div>
        </div>

        {/* <div class="form-group row">
          <div class="col-sm-2">Checkbox</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1" />
              <label class="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div> */}
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default OPD;
