import React from "react";
import { FaSignal } from "react-icons/fa";

const about = () => {
  return (
    <>
      <div id="about" className="container-fluid bg-dark px-5">
        <div className="row">
          <div className="col-sm-8">
            <h2 className="text-light pb-3">About Aarkay</h2>
            <h4 className="text-light">
              26 Years in providing complete IT Solutions depending on the
              customer need and requirements.
            </h4>
            <ul className="aboutList">
              <li className="lead text-muted mt-2">
                Serving since 26 Years in providing complete IT Solutions
                depending on the customer need and requirements.
              </li>
              <li className="lead text-muted mt-2">
                We provide Consultancy and execute Turnkey projects on IT
                Infrastructure needed to cope up with growing demands of
                information availability, reliability, storage, remote
                connectivity from anywhere.
              </li>
              <li className="lead text-muted mt-2">
                We deliver clients with innovative, process-driven technology
                solution which can help them to enhance business productivity,
                thereby enabling clients the opportunity. This will result into
                true cost savings in their unique operating environment.
              </li>
              <li className="lead text-muted mt-2">
                Our team of industry experts and certified engineers offer
                focused services tailored to meet your specific business need,
                from individual projects to complete outsourcing. We specialise
                in a wide range of IT technologies and can provide resource to
                address the need of SMEIT Infrastructure.
              </li>
            </ul>
          </div>
          <div className="col-sm-4 logoContainer">
            <span className="FaIcon">
              <FaSignal />
            </span>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-sm-4 aboutLogoContainer pb-5 mb-5">
            <span className="aboutLogo"></span>
          </div>
          <div className="col-sm-8">
            <h2 className="text-light">Our Values</h2>
            <p>
              <strong>MISSION:</strong> We understand our customer's
              requirement, design, develop and provide the best & feasible long
              run solution using the best available technology in the field of
              Barcode, RFID, Bio-Metric, software development, enterprise
              mobility, industrial mobility, android apps, POS and Digital
              Signage.
            </p>
            <p>
              <strong>VISION:</strong> Our vision is to reach, secure and retain
              a top ranked place among its clients in our operational
              jurisdiction by providing quality service and maintaining a long
              standing relationship with its client. We make it a Win-Win
              strategy for the company, client and user through which everyone
              attain the best result. To be the preferred and safest work place
              where employees can enrich their knowledge, express their views
              and live a balanced life.
            </p>
          </div>
        </div>
      </div>
      <div className="px-0 mx-0">
        <div className="careerCard card-body text-center py-5 bg-light">
          <div className="row justify-content-center">
            <div className="col-auto py-5">
              <h2 className="text-dark mb-5">We're Hiring!</h2>
              <h4 className="h4 text-dark">
                <b>Interested in working with us?</b>
              </h4>
              <small className="small text-dark">
                Drop your CV at
                <span className="mx-2">
                  <b>admin@atcgroup.co.in</b>
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
