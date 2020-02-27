import React from 'react';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      isSaved: true,
      sbHeight: 192,
      labelOpacity: 1,
      labelHeight: 16,
      dateFontSize: '2.5em',
      dateHeight: 55,
      dateOpacity: 1,
      msgOpacity: 1,
      msgTextDecoration: 'none',
      message: 'Open until Sun, March 1'
    }
    this.scrollHandler = this.scrollHandler.bind(this);
    this.itemClickHandler = this.itemClickHandler.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  itemClickHandler() {
    this.state.isSaved ? this.unsave() : this.save()
  }

  scrollHandler() {
    const trigger = 50;
    let scrollPos = window.scrollY;
    if(scrollPos > trigger && !this.state.isScrolled) {
      this.scroll()
    }
    else if (scrollPos < trigger && this.state.isScrolled) {
      this.unscroll()
    }
  }

  scroll() {
    this.state.isSaved ? this.scrollToDate() : this.scrollToMessage()
  }

  unscroll() {
    this.setState({
      isScrolled: false,
      sbHeight: 192,
      dateFontSize: '2.5em',
      dateHeight: 55,
      labelOpacity: 1,
      labelHeight: 16,
      msgOpacity: 1,
      dateOpacity: 1
     })
  }

  save() {
    this.setState({
      isSaved: true,
      message: 'Open until Sun, March 1',
      msgTextDecoration: 'none'
    })
    if(this.state.isScrolled) {
      this.scrollToDate()
    }
  }

  unsave() {
    this.setState({
      isSaved: false,
      message: 'Review Box to Save',
      msgTextDecoration: 'underline'
    })
    if(this.state.isScrolled) {
      this.scrollToMessage()
    }
  }

  scrollToDate() {
    this.setState({
      isScrolled: true,
      sbHeight: 80,
      labelOpacity: 0,
      dateFontSize: '1.5em',
      dateOpacity: 1,
      msgOpacity: 0
     })
  }

  scrollToMessage() {
    this.setState({
      isScrolled: true,
      sbHeight: 80,
      labelOpacity: 0,
      labelHeight: 0,
      dateFontSize: '1.5em',
      dateOpacity: 0,
      dateHeight: 0,
      msgOpacity: 1
     })
  }

  render() {
    let labelStyle = {
      height: this.state.labelHeight,
      opacity: this.state.labelOpacity
    }
    let dateStyle = {
      fontSize: this.state.dateFontSize,
      height: this.state.dateHeight,
      opacity: this.state.dateOpacity
    }
    let msgStyle = {
      opacity: this.state.msgOpacity,
      textDecoration: this.state.msgTextDecoration
    }
    console.log('still testing')
    return (
      <div className="App">

        <div id="sticky-top">
          <div id="header">D H</div>
          <div id="status-bar" style={{ height: this.state.sbHeight }}>
            <div id="status-bar-content">
              <div className="status-bar-label" style={labelStyle}>Next Delivery</div>
              <div className="status-bar-date" style={dateStyle}>Thu, March 5</div>
              <div className="status-bar-msg" style={msgStyle}>{this.state.message}</div>
            </div>
          </div>
        </div>

        <div id="content" onClick={this.itemClickHandler}>
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

      </div>


    )
  }
}

export default App;
