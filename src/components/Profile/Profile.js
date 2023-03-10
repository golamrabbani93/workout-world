import React, {useEffect, useState} from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Fitness from '../Fitness/Fitness';
import ToastBtn from '../ToastBtn/ToastBtn';
import {addTtime, getLocalTime} from '../../utilities/addDb';

import profileImage from './mypng.png';
import './Profile.css';

const Profile = (props) => {
	const {totalList} = props;
	let total = 0;
	for (const totalTime of totalList) {
		total = total + totalTime.time;
	}
	const [breakTime, setBreakTime] = useState([]);
	const getbreakTime = (e) => {
		if (e.target.classList.contains('break-font')) {
			const breakTimes = e.target.innerText;
			setBreakTime(breakTimes);
			addTtime(breakTimes);
		}
	};
	useEffect(() => {
		const localTime = getLocalTime();
		if (localTime) {
			for (const id in localTime) {
				if (id) {
					const newTime = localTime[id];
					setBreakTime(newTime);
				}
			}
		}
	}, []);
	return (
		<div className="profile-container">
			<div className="profile d-flex align-items-center justify-content-center pt-4">
				<div className="profile-img ">
					<img src={profileImage} alt="" />
				</div>
				<div className="profile-data ms-3 text-white">
					<h3>Golam Rabbani</h3>
					<h5>
						<i className="fa-solid fa-location-dot me-2"></i>Rajshahi,Bangladesh
					</h5>
				</div>
			</div>
			<div>
				<Fitness></Fitness>
				<Break getbreakTime={getbreakTime}></Break>
				<Details total={total} breakTime={breakTime}></Details>
			</div>
			<ToastBtn></ToastBtn>
		</div>
	);
};

export default Profile;
