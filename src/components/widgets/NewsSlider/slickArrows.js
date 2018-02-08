import React from 'react';

export function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, right: 0, zIndex: 99, fontSize: '40px' }}
			onClick={onClick}
		/>
	);
}

export function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, left: 0, zIndex: 99, fontSize: '40px' }}
			onClick={onClick}
		/>
	);
}
