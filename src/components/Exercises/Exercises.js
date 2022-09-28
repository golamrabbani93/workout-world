import React, {useEffect, useState} from 'react';

const Exercises = () => {
	const [exercizes, setExercizes] = useState([]);
	useEffect(() => {
		fetch('fakeDb/fakeData.json')
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);
	return (
		<div className="exercize-container">
			<h2>Exercises</h2>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-8"></div>
					<div className="col-xl-4">2</div>
				</div>
			</div>
		</div>
	);
};

export default Exercises;
