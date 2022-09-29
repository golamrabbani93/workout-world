import React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ToastBtn.css';
const ToastBtn = () => {
	const notify = () => {
		toast.success('Wow Exercise Complete!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};
	return (
		<div className="list-btn pt-5">
			<button onClick={notify} className="btn btn-primary  d-block m-auto mb-3 toast-btn ">
				Activity Completed
			</button>
			<ToastContainer />
		</div>
	);
};

export default ToastBtn;
