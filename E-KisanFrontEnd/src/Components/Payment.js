import React from "react";

export default function Payment() {
  return (
    <div>
        <div className="my-5 ">
        </div>
        <div classNameName="title mx-4" style={{ textAlign: "left" }}>
          <h2>Payment Getway</h2>
        </div>
        
        <form  action="/thankyou" style={{ textAlign: "left" }} >
      <div className="form-check form-check-inline mx-3">
        <input
          className="form-check-input mx-1"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
          checked
        />
        <label className="form-check-label mx-3" for="inlineRadio1">
          <strong>Pay on Delivery</strong>
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input mx-1"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label mx-3" for="inlineRadio2">
          <strong>Credit Card</strong>
        </label>
      </div>
      <div className="form-check form-check-inline my-4">
        <input
          className="form-check-input mx-1"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label mx-3" for="inlineRadio1">
          <strong>Debit Card</strong>
        </label>
      </div><div className="form-check form-check-inline my-4">
        <input
          className="form-check-input mx-1"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label mx-3" for="inlineRadio1">
          <strong>UPI</strong>
        </label>
      </div>
      <div className="mx-5"></div>
       <div>
       <button class="btn btn-primary mx-4 my-4"  type="submit">Pay Now</button>
       </div>

      </form>
      
    </div>
  );
}
