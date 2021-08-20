function Card(props) {
	return (
		<div className="card">
			<div className="card-img">
				<img className="image" src={props.image} />{" "}
			</div>{" "}
			<div className="card-body">
				<h2 className="card-title"> {props.title} </h2>{" "}
				<h3 className="card-subtitle"> {props.subtitle} </h3>{" "}
				<p className="card-desc"> {props.desc} </p>{" "}
				<button className="card-btn"> Buy </button>{" "}
			</div>{" "}
		</div>
	);
}

export default Card;
