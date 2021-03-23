/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (

    <section>
      <div>
        <div className="card-group">
          <div classNameName="img-container">
            <img alt={props.name} srtc={props.image} />
          </div>
          <div className="card">
            <img alt="Images" src={props.images} />
            <div className="Team">{props.team}
              <h5 className="Projects">{props.projects}</h5>
              <p className="Description">{props.description}</p>
              <p className="Deployment">{props.deployment}</p>
            </div>
          </div>
          <div className="card">
            <img alt="Images" src={props.images} />
            <div className="Team">{props.team}
              <h5 className="Projects">{props.projects}</h5>
              <p className="Description">{props.description}</p>
              <p className="Deployment">{props.deployment}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCard;
