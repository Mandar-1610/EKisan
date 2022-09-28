import React from 'react'

export default function Aboutus() {
  return (
    <div>
      <div className='container my-4'>
        <div ClassName="accordion" id="accordionExample">
          <div ClassName="accordion-item">
            <h2 ClassName="accordion-header" id="headingThree">
              <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                About us
              </button>
            </h2>
            <div id="collapseThree" ClassName="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div ClassName="accordion-body">
                <strong>This is E-kisan website.</strong> 'E-Kisan' is an Online platform for buying as well as selling the essential items like vegetables and fruits. The user
                can be a seller or a buyer. The Seller can add/update/delete the products, which he/she wants to sell. The buyer can
                get the advantage of competitive pricing as different sellers will be adding the products at different prices, So the
                buyer can choose the lowest priced product. This is a user friendly system as no
                formal knowledge is required to use
                it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
