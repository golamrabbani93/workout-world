import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<nav className="navbar navbar-expand-lg">
					<div className="container-fluid">
						<a className="navbar-brand d-block m-auto" href="/home">
							<i className="fa-solid fa-dumbbell me-2"></i>Workout World
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
