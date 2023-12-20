import React from "react";

function Price({ value }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {value.cost}
            </h5>
            <h6 className="card-price text-center">
              {value.price}
              <span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li className={value.isUser ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={value.isUser ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {value.cost !== "Free" ? (
                  <b>{value.user}</b>
                ) : (
                  <>{value.user}</>
                )}
              </li>
              <li className={value.isStorage ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      value.isStorage ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {value.storage}
              </li>
              <li className={value.isProjects ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      value.isProjects ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {value.projects}
              </li>
              <li className={value.isAccess ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={value.isAccess ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {value.access}
              </li>
              <li className={value.isSupport ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      value.isSupport ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {value.support}
              </li>
              <li className={value.isPrivate ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      value.isPrivate ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {value.private}
              </li>
              <li className={value.isDomain ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={value.isDomain ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {value.cost === "Pro" ? (
                  <>
                    <b>Unlimited</b> {value.domain}
                  </>
                ) : (
                  value.domain
                )}
              </li>
              <li className={value.isReport ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={value.isReport ? "fas fa-check" : "fas fa-times"}
                  ></i>
                </span>
                {value.report}
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
