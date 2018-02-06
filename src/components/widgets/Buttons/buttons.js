import React from 'react'

import styles from "./buttons.css";

const buttons = (props) => {
  let template = null;

  switch(props.type) {
    case 'loadmore':
      template = (
        <div className={styles.blue_btn}
          onClick={props.loadMore}
        >
          {props.cta}
        </div>
      )
      break;
    default:
    template = null;
  }
  return template;
}

export default buttons
