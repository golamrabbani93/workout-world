import React, {useEffect, useState} from 'react';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';
import './Exercises.css';

const Exercises = () => {
	const [exercizes, setExercizes] = useState([]);
	useEffect(() => {
		fetch('fakeData.json')
			.then((res) => res.json())
			.then((data) => setExercizes(data));
	}, []);
	const [totalList, setTotalList] = useState([]);

	const addToList = (list) => {
		const newList = [...totalList, list];
		setTotalList(newList);
	};
	return (
		<div className="exercize-container">
			<div className="container-fluid">
				<h2 className="mb-2 mt-5 head-color text-center">Select today’s exercise</h2>
				<div className="row">
					<div className="col-xl-8">
						<div className="row row-cols-1 row-cols-md-3 g-4">
							{exercizes.map((exercise) => (
								<Exercise exercise={exercise} key={exercise.id} addToList={addToList}></Exercise>
							))}
						</div>
					</div>
					<div className="col-xl-3">
						<Profile totalList={totalList}></Profile>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Exercises;
