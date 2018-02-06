import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './cardInfo.css';

const cardInfo = props => {
	const teamName = (teams, team) => {
		const data = teams.find(item => item.id === team);
		return data ? data.name : null;
	};

	return (
		<div className={styles.cardInfo}>
			<span className={styles.teamName}>
				{teamName(props.teams, props.team)}
			</span>
			<span className={styles.date}>
				<FontAwesome name="clock-o" />
				{props.date}
			</span>
		</div>
	);
};

export default cardInfo;
