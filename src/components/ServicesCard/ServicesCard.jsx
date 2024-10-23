import React from 'react';

function ServicesCard({ serviceName, description, link, buttonLabel, imgs }) {
  return (
    <div className="d-flex mb-4">
      <div className="servicesCard d-flex flex-column">
        <img src={imgs} alt={serviceName} />
        <div className="ser_Content mt-3">
          <h5>{serviceName}</h5>
          <p>{description}</p>
          {/* Uncomment the link if needed */}
          {/* <Link href={link}>
            {buttonLabel}
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
