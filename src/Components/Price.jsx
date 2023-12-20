import React from "react";

function Price(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.value.cost}
            </h5>
            <h6 className="card-price text-center">
              {props.value.price}
              <span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.value.user}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.value.storage}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.value.projects}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.value.access}
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {props.value.user}
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {props.value.private}
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {props.value.domain}
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {props.value.report}
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
