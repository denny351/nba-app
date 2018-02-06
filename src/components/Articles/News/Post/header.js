import React from 'react'

import TeamInfo from '../../Elements/teamInfo';
import PostData from '../../Elements/postData';

const header = (props) => {



  return (
    <div>
      {props.teamData && <TeamInfo team={props.teamData}/>}
      <PostData date={props.date} author={props.author} />
    </div>
  )
}

export default header
