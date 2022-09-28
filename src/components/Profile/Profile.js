import React from 'react';
import Break from '../Break/Break';
import Fitness from '../Fitness/Fitness';
import profileImage from './mypng.png';
import './Profile.css';
const Profile = () => {
	return (
		<div>
			<div className="profile d-flex align-items-center justify-content-center pt-4">
				<div className="profile-img ">
					<img src={profileImage} alt="" />
				</div>
				<div className="profile-data ms-3 text-white">
					<h3>Golam Rabbani</h3>
					<h5>Rajshahi,Bangladesh</h5>
				</div>
			</div>
			<div>
				<Fitness></Fitness>
				<Break></Break>
			</div>
		</div>
	);
};

export default Profile;
