import React from 'react';

const Questions = () => {
	return (
		<div className="container pb-5 mb-5 mt-4">
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							How Does React Works ?
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>
								ReactJS divides the UI into isolated reusable pieces of code known as components.
							</strong>
							React components work similarly to JavaScript functions as they accept arbitrary
							inputs called properties or props. It's possible to have as many components as
							necessary without cluttering your code.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Props vs State
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<p>
								<strong>Props :</strong> Props are used to pass data from one component to another.
							</p>
							<p>
								<strong>State :</strong> The state is a local data storage that is local to the
								component only and cannot be passed to other components. The this. setState property
								is used to update the state values in the component
							</p>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Accordion Item #3
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This is the third item's accordion body.</strong> It is hidden by default,
							until the collapse plugin adds the appropriate classNamees that we use to style each
							element. These classNamees control the overall appearance, as well as the showing and
							hiding via CSS transitions. You can modify any of this with custom CSS or overriding
							our default variables. It's also worth noting that just about any HTML can go within
							the <code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Questions;
