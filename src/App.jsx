import React from 'react';
import { IoIosArrowDown as Icon } from 'react-icons/io';

import Dropdown from './Dropdown';
import './App.css';

function App() {
	const changeColor = color => {
		const background = document.querySelector('.background');
		background.style.backgroundColor = color;
	};

	return (
		<div className="background">
			<Dropdown title="Change theme">
				<Dropdown.Item onClick={() => changeColor('tomato')}>Tomato</Dropdown.Item>
				<Dropdown.Item onClick={() => changeColor('darkslateblue')}>Purple</Dropdown.Item>
			</Dropdown>
			<div className="spacer">
				<Dropdown
					offset={{ top: 20 }}
					toggleComponent={({ ref, toggle }) => (
						<div ref={ref} className="row" onClick={toggle}>
							<p className="row-title">Change theme</p>
							<div className="row-icon">
								<Icon />
							</div>
						</div>
					)}
				>
					<Dropdown.Item onClick={() => changeColor('tomato')}>Tomato</Dropdown.Item>
					<Dropdown.Item onClick={() => changeColor('darkslateblue')}>
						Purple
					</Dropdown.Item>
				</Dropdown>
			</div>
		</div>
	);
}

export default App;
