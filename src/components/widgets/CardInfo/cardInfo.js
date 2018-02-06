import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

import styles from './cardInfo.css';

const cardInfo = props => {
	const teamName = (teams, team) => {
		const data = teams.find(item => item.teamId === team);
		return data ? data.name : null;
  };
  
const formatDate = (date) => {
  return moment(date).format(' MM-DD-YYYY');
}

	return (
		<div className={styles.cardInfo}>
			<span className={styles.teamName}>
				{teamName(props.teams, props.team)}
			</span>
			<span className={styles.date}>
				<FontAwesome name="clock-o" />
				{formatDate(props.date)}
			</span>
		</div>
	);
};

export default cardInfo;
