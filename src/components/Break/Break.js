import React from 'react';
import './Break.css';

const Break = (props) => {
	const {breakTime} = props;
	return (
		<div className="break text-white mt-3">
			<h2>Add A Break</h2>
			<div
				onClick={(event) => breakTime(event)}
				className="break-count text-dark d-flex  align-items-center justify-content-around mt-4"
			>
				<p className="mt-3">
					<span className="break-font">20</span> s
				</p>
				<p className="mt-3">
					<span className="break-font">20</span> s
				</p>
				<p className="mt-3">
					<span className="break-font">20</span> s
				</p>
				<p className="mt-3">
					<span className="break-font">20</span> s
				</p>
				<p className="mt-3">
					<span className="break-font">20</span> s
				</p>
			</div>
		</div>
	);
};

export default Break;
