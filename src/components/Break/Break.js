import React from 'react';
import './Break.css';

const Break = (props) => {
	const {getbreakTime} = props;
	return (
		<div className="break text-white mt-3">
			<h2>Add A Break</h2>
			<div
				onClick={(e) => getbreakTime(e)}
				className="break-count text-dark d-flex  align-items-center justify-content-around mt-4"
			>
				<p className="mt-3">
					<span className="break-font">10</span> s
				</p>
				<p className="mt-3">
					<span className="break-font">20</span> s
				</p>
				<p className="mt-3">
					<span className="break-font">30</span> s
				</p>
				<p className="mt-3">
					<span className="break-font">40</span> s
				</p>
				<p className="mt-3">
					<span className="break-font">50</span> s
				</p>
			</div>
		</div>
	);
};

export default Break;
