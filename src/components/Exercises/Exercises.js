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

	// let [news, setNews] = useState([]);
	// const loadNewsData = (id, name) => {
	// 	setNews(id);
	// };

	// useEffect(() => {
	// 	const url = `https://openapi.programming-hero.com/api/news/category/${news}`;
	// 	console.log('🚀 ~ file: Menus.js ~ line 12 ~ useEffect ~ r', url);
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((data) => console.log(data.data));
	// }, [news]);
	const [totalList, setTotalList] = useState([]);

	const addToList = (list) => {
		const newList = [...totalList, list];
		setTotalList(newList);
	};
	return (
		<div className="exercize-container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-8">
						<h2 className="mb-5">Select today’s exercise</h2>
						{/* <h2>{totalTime}</h2> */}
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
