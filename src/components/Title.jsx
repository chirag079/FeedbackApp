import React from 'react';
import PropTypes from 'prop-types'


function Title({bgColor, textColor}) {
    const headerStyles={
        backgroundColor:bgColor,
        color:textColor,
    }

  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>Feedback UI</h2>
        </div>
    </header>
  )
}

Title.propTypes={
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}


export default Title;
