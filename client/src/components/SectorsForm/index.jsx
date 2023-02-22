/** @format */

import React, { useEffect, useState } from 'react';
import { Input, Button, Form, Spin, Checkbox, Select, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const SectorsForm = () => {
	let navigate = useNavigate();

	const [userName, setUserName] = useState('');
	const [actionBtnName, setActionBtnName] = useState('Save');
	const [sectors, setSectors] = useState([]);
	const [selectedList, setSelectedList] = useState([]);
	const [formStatus, setFormStatus] = useState(false);

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [loadingSectors, setLoadingSectors] = useState(false);

	const handleStatusChange = (e) => {
		setError('');
		setFormStatus(e.target.checked);
	};

	const handleNameChange = (e) => {
		setUserName(e.target.value);
	};

	const handleSectorChange = (value) => {
		setSelectedList(value);
	};

	const backToHome = () => {
		navigate('/');
	};

	const submitForm = async () => {
		try {
			if (!formStatus) {
				setError('You must agree !');
				return;
			}
			setError('');
			setLoading(true);
			if (actionBtnName === 'Update') {
				await axios.post('/api/v1/updateSelectors', {
					user_name: userName,
					saved_list: selectedList,
					term_condition: formStatus,
				});

				message.success('Updated Successfully');
			} else {
				await axios.post('/api/v1/addSelectors', {
					user_name: userName,
					saved_list: selectedList,
					term_condition: formStatus,
				});
				message.success('Saved Successfully');
			}
			setLoading(false);
			navigate('/sectorsList', { state: { list: selectedList, userName } });
		} catch (err) {
			let error;
			setLoading(false);
			if (err.response) {
				error = err.response.data.msg;
			} else {
				error = 'Something went wrong, please try again later';
			}
			setError(error);
		}
	};

	const getSectors = async () => {
		try {
			setLoadingSectors(true);
			const { data } = await axios.get('/api/v1/getSectors');
			if (data.length !== 0) {
				let sectorsArray = data[0].list.map((option) => ({
					label: option,
					value: option,
				}));
				setSectors(sectorsArray);
			}

			setLoadingSectors(false);
		} catch (err) {
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
	const getUserData = async () => {
		try {
			setLoadingSectors(true);
			const { data } = await axios.get('/api/v1/getUserData');
			if (data.length !== 0) {
				setUserName(data[0].user_name);
				setSelectedList(data[0].saved_list);
				setFormStatus(true);
				setActionBtnName('Update');
			}

			setLoadingSectors(false);
		} catch (err) {
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
		getSectors();
		getUserData();
	}, []);

	return (
		<>
			{loadingSectors ? (
				<div className='loading-state'>
					<Spin size='large' />
				</div>
			) : (
				<div className='main-container'>
					<div className='back-btn-box'>
						<Button onClick={backToHome} className='back-home-btn'>
							Back To Home
						</Button>
					</div>
					<div className='form-container'>
						<div className='sectors-form'>
							<p className='form-title'>
								Please enter your name and pick the sectors you are currently
								involved in
							</p>
							<Form
								onFinish={submitForm}
								fields={[
									{
										name: ['userName'],
										value: userName,
									},
									{
										name: ['selectedList'],
										value: selectedList,
									},
								]}>
								<div className='form-input'>
									<Form.Item
										label='Name'
										name='userName'
										rules={[
											{
												required: true,
												message: 'Please enter your name!',
											},
										]}>
										<Input
											value={userName}
											defaultValue={userName}
											name='userName'
											onChange={(e) => handleNameChange(e)}
											placeholder='Enter your name'
										/>
									</Form.Item>
								</div>
								<div className='form-input'>
									<Form.Item
										label='Sector'
										name='selectedList'
										rules={[
											{
												required: true,
												message: 'Please select sector!',
											},
										]}>
										<Select
											name='selectedList'
											mode='multiple'
											allowClear
											style={{
												width: '100%',
											}}
											placeholder='Please select sector'
											defaultValue={selectedList}
											onChange={handleSectorChange}
											options={sectors}
										/>
									</Form.Item>
								</div>

								<div className='form-condition'>
									<Checkbox checked={formStatus} onChange={handleStatusChange}>
										Agree to terms
									</Checkbox>
									{error && <p style={{ color: 'red' }}> {error}</p>}
								</div>
								<div className='form-action'>
									<Button htmlType='submit'>
										{loading ? (
											<Spin size='small' />
										) : (
											actionBtnName
										)}
									</Button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SectorsForm;
