import React from 'react';
import './Details.css';
const Details = (props) => {
	const {total, breakTime} = props;
	return (
		<div className="pt-2 mt-2 text-white">
			<h2>Exercise Details</h2>
			<div className="row px-1 mt-4 time m-2">
				<div className="col-sm-6">
					<h4>Exercise Time :</h4>
				</div>

				<div className="col-sm-6  text-left">
					<h4>
						{total} <span>seconds</span>
					</h4>
				</div>
			</div>
			<div className="row px-1 mt-4 time m-2">
				<div className="col-sm-6 ">
					<h4>Break time :</h4>
				</div>

				<div className="col-sm-6   text-left">
					<h4>
						{breakTime} <span>seconds</span>
					</h4>
				</div>
			</div>
		</div>
	);
};

export default Details;
