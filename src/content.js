import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div id="content" onClick={this.props.action}>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
        <div className="content-item"></div>
      </div>
    )
  }
}

export default Content;
