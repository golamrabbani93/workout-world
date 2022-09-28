import React, {useEffect, useState} from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
	const [exercizes, setExercizes] = useState([]);
	useEffect(() => {
		fetch('fakeDb/fakeData.json')
			.then((res) => res.json())
			.then((data) => setExercizes(data));
	}, []);
	return (
		<div className="exercize-container">
			<h2>Exercises</h2>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-9">
						<div className="row row-cols-1 row-cols-md-3 g-4">
							{exercizes.map((exercise) => (
								<Exercise exercise={exercise} key={exercise.id}></Exercise>
							))}
						</div>
					</div>
					<div className="col-xl-3">2</div>
				</div>
			</div>
		</div>
	);
};

export default Exercises;
