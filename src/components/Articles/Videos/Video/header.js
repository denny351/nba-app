import React from 'react';
import TeamInfo from '../../Elements/teamInfo';

const header = (props) => {
  return (
    <div>
      {props.teamData && <TeamInfo team={props.teamData} />}
    </div>
  )
}

export default header;
