/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './style.css';

export default function Home() {
	let navigate = useNavigate();
	const chooseSelectors = () => {
		navigate('/sectorsform');
	};
	return (
			<div className='main-home'>
				<img
					className='home-picture'
					src={require('../../assest/Diary-bro.png')}
					alt='pic'
				/>
				<h1 className='home-header'>Sectors Selector</h1>
				<p className='home-sub-header'>
					Choose your favourite selectors and save them...
				</p>
				<Button onClick={chooseSelectors} className='home-btn'>
					Start Now
				</Button>
			</div>
	);
}