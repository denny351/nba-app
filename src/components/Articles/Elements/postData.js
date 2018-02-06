import React from 'react';
import styles from '../articles.css';

const postData = (props) => (
    <div className={styles.articlePostData}>
      <div>
        Date: <span>{props.date}</span>
      </div>
      <div>
        Author: <span>{props.author}</span>
      </div>
    </div>
  )

export default postData;
