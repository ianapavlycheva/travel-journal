function Card(props) {
    return (
        <div className="card">
            <img src={props.item.coverImg} className="card--image" alt={`${props.item.title}`} />
            <div className="card--details">
            <img className="card--logo"src="./src/images/map.png" />
            <span className="card--country">{props.item.country}</span>
            <a className="card--maps" href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps
            </a>
          <h2 className="card--title">{props.item.title}</h2>

      <div className="card--dates">
        <span>{props.item.dates.arrival}</span> - <span>{props.item.dates.departure}</span>
      </div>
            <p className="card--description">{props.item.description}</p>
      </div>
        </div>

    )
}

export default Card