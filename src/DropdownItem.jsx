import React from 'react';

function DropdownItem({ children, close, onClick }) {
	const onClickItem = e => {
		e.stopPropagation();
		onClick();
		close();
	};

	return (
		<div className="item" onClick={onClickItem}>
			<p className="item-text">{children}</p>
		</div>
	);
}

export default DropdownItem;
