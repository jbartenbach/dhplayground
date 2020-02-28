import React from 'react';
import './StatusBar.css';

class StatusBar extends React.Component {

  render() {

    let morphState = ''
    if(this.props.isScrolled) {
      (morphState = 'scroll')
      this.props.isSaved ? (morphState += ' scroll-to-date') : (morphState += ' scroll-to-message')
    }

    return (
      <div id="status-bar" className={morphState}>
        <div id="status-bar-content">
          <div className={`status-bar-label ${morphState}`}>Next Delivery</div>
          <div className={`status-bar-date ${morphState}`}>Thu, March 5</div>
          <div className={`status-bar-msg ${morphState}`}>
            {this.props.isSaved ? (<span>Open until Sun, March 1</span>) : (<span style={{textDecoration: 'underline', color: '#000000'}}>Review Box to Save</span>)}
          </div>
        </div>
      </div>
    )
  }
}

export default StatusBar;
