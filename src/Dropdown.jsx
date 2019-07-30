import React, { useEffect, useRef, useState } from 'react';

import useMeasure from './hooks/useMeasure';
import DropdownItem from './DropdownItem';

const getMenuStyles = (bounds, offset) => {
	let top = bounds.height + 2;
	let left = 0;

	if (offset) {
		if (offset.top) {
			top += offset.top;
		}

		if (offset.left) {
			left += offset.left;
		}
	}

	return { top, left };
};

function Dropdown({ children, title, offset, toggleComponent }) {
	const [open, setOpen] = useState(false);
	const [ref, bounds] = useMeasure();
	const menuRef = useRef(null);

	const toggle = () => setOpen(open => !open);
	const close = () => setOpen(false);

	useEffect(() => {
		const onWindowClick = e => {
			if (
				ref.current &&
				!ref.current.contains(e.target) &&
				menuRef.current &&
				!menuRef.current.contains(e.target)
			) {
				close();
			}
		};

		window.addEventListener('mousedown', onWindowClick);
		return () => window.removeEventListener('mousedown', onWindowClick);
	});

	const enhancedChildren = React.Children.toArray(children)
		.filter(child => child)
		.map(child => React.cloneElement(child, { close }));

	return (
		<div className="dropdown">
			{toggleComponent ? (
				toggleComponent({ ref, toggle })
			) : (
				<div ref={ref} className="toggle" onClick={toggle}>
					<p className="title">{title}</p>
				</div>
			)}
			{open && (
				<div ref={menuRef} className="menu" style={getMenuStyles(bounds, offset)}>
					{enhancedChildren}
				</div>
			)}
		</div>
	);
}

Dropdown.Item = DropdownItem;
export default Dropdown;
