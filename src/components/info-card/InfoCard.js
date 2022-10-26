import './info-card.css';

const InfoCard = ({
  ip,
  country,
  city,
  region,
  postalCode,
  timezone,
  isp
}) => {

  return (
    <div className="location-info">
      <div className="info">
        <div className="info__block">
          <h5 className="info__heading">IP ADDRESS</h5>
          <p className="info__descr">{ip}</p>
        </div>

        <div className="info__block">
          <h5 className="info__heading">LOCATION</h5>
          <p className="info__descr">{`${city}, ${region}, ${country} ${postalCode}`}</p>
        </div>

        <div className="info__block">
          <h5 className="info__heading">TIMEZONE</h5>
          <p className="info__descr">UTC{timezone}</p>
        </div>

        <div className="info__block">
          <h5 className="info__heading">ISP</h5>
          <p className="info__descr">{isp}</p>
        </div>
      </div>
    </div>
  );
};

export { InfoCard };
