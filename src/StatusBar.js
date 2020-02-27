import React from 'react';

class StatusBar extends React.Component {

  render() {
    return (
      <div id="status-bar" style={this.props.statusBarStyle}>
        <div id="status-bar-content">
          <div className="status-bar-label" style={this.props.labelStyle}>Next Delivery</div>
          <div className="status-bar-date" style={this.props.dateStyle}>Thu, March 5</div>
          <div className="status-bar-msg" style={this.props.msgStyle}>
            {this.props.isSaved ? (<span>Open until Sun, March 1</span>) : (<span style={{textDecoration: 'underline'}}>Review Box to Save</span>)}
          </div>
        </div>
      </div>
    )
  }

}

export default StatusBar;
