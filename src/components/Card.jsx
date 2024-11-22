import PropTypes from "prop-types";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.coverImg} className="card--image" alt={`${props.title}`} />
              <div className="card--details">
                <img className="card--logo"src="./src/images/map.png" />
                <span className="card--country">{props.country}</span>
                <a className="card--maps" href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps
                </a>
                <h2 className="card--title">{props.title}</h2>

                <div className="card--dates">
                  <span>{props.dates.arrival}</span> - <span>{props.dates.departure}</span>
                </div>
                <p className="card--description">{props.description}</p>
              </div>
        </div>

    )
}

Card.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  googleMapsUrl: PropTypes.string.isRequired,
  dates: PropTypes.shape({
    arrival: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};