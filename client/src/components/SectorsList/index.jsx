/** @format */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Spin } from 'antd';
import axios from 'axios';
import './style.css';

function SectorsList() {
	const [sectorsList, setSectorsList] = useState([]);
	const [userName, setUserName] = useState('');
	const [loadingSectors, setLoadingSectors] = useState(false);
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const backToHome = () => {
		navigate('/');
	};

	const editSelectors = () => {
		navigate('/sectorsform');
	};

	const getUserData = async () => {
		try {
			setLoadingSectors(true);
			const { data } = await axios.get('/api/v1/getUserData');
			if (data.length !== 0) {
				setUserName(data[0].user_name);
				setSectorsList(data[0].saved_list);
			}

			setLoadingSectors(false);
		} catch (err) {
			console.log(err);
			let error;
			setLoadingSectors(false);
			if (err.response) {
				error = err.response.data.msg;
			} else {
				error = 'Something went wrong, please try again later';
			}
			setError(error);
		}
	};

	useEffect(() => {
		getUserData();
	}, []);
	return (
		<>
			{loadingSectors ? (
				<div className='loading-state'>
					<Spin size='large' />
				</div>
			) : (
				<div className='list-container'>
					<h2 className='list-title'>Sectors List</h2>
					<div className='list-userName-box'>
						<p className='list-userName'>Welcome {userName} ...</p>
					</div>
					<div className='list-action-btns'>
						<Button onClick={backToHome} className='list-single-btn'>
							Back To Home
						</Button>
						<Button onClick={editSelectors} className='list-single-btn'>
							Edit Selectors
						</Button>
					</div>

					<div className='sectors-list'>
						{sectorsList?.map((sector) => {
							return (
								<div className='sector-wrapper' key={sector.id}>
									<p>{sector}</p>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
}

export default SectorsList;
