import React from 'react';

const Fitness = () => {
	return (
		<div className="fitness text-white d-flex text-center  align-items-center justify-content-around mt-3">
			<div className="weight">
				<p className="mb-1">
					<span className="fitness-font">75</span>kg{' '}
				</p>
				<p>Weight</p>
			</div>
			<div className="height">
				<p className="mb-1">
					<span className="fitness-font">6.2</span>kg{' '}
				</p>
				<p>Height</p>
			</div>
			<div className="age">
				<p className="mb-1">
					<span className="fitness-font">22</span>yrs{' '}
				</p>
				<p>Age</p>
			</div>
		</div>
	);
};

export default Fitness;
