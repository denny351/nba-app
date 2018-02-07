import React from 'react'
import styles from './formFields.css';

const formFields = ({formdata, change, id}) => {

  const renderTemplate = () => {
    let formTemplate = null;

    switch(formdata.element) {
      case 'input':
        formTemplate = (
          <div>
            <input 
              {...formdata.config}
              value={formdata.value}
              onBlur={(event) => change({event, id, blur:true})}
              onChange={(event) => change({event, id, blur:false})}
            />
            {!formdata.valid && <div className={styles.labelError}>{formdata.validationMessage}</div>}
          </div>
        )
        break;
      default: 
        formTemplate = null;
    }
    return formTemplate;
  }

  return (
    <div>
      {renderTemplate()}
    </div>
  )
}

export default formFields;
