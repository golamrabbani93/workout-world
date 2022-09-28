import React from 'react';
import './Exercise.css';
const Exercise = (props) => {
	console.log(props.exercise);
	const {name, img, time} = props.exercise;
	console.log(img);
	return (
		<div className="col">
			<div className="card">
				<div className="card-img">
					<div className="img">
						<img src={img} className="card-img-top" alt="..." />
					</div>
				</div>

				<div className="card-body">
					<h5 className="card-title fw-bolder">{name}</h5>
					<p className="card-text fw-bold">Time required : {time}s</p>
				</div>
				{/* <div className="list-btn">
					<button className="btn btn-primary w-75 d-block m-auto mb-3">Add to list</button>
				</div> */}
			</div>
		</div>
	);
};

export default Exercise;
