import React from 'react';
import './App.css';
import StatusBar from './StatusBar';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      isSaved: true,
      statusBarStyle: {},
      labelStyle: {},
      dateStyle: {},
      msgStyle: {}
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
    this.setState({ isSaved : !this.state.isSaved });
    if(this.state.isScrolled) {
      this.state.isSaved ? this.scrollToMessage() : this.scrollToDate()
    }
  }

  scrollHandler() {
    const trigger = 50;
    let scrollPos = window.scrollY;
    if(scrollPos > trigger && !this.state.isScrolled) {
      this.setState({ isScrolled : true })
      this.state.isSaved ? this.scrollToDate() : this.scrollToMessage()
    }
    else if (scrollPos < trigger && this.state.isScrolled) {
      this.unscroll()
    }
  }

  scrollToDate() {
    this.setState({
      statusBarStyle: { height: 80 },
      labelStyle: { opacity: 0 },
      dateStyle: { fontSize: '1.5em' },
      msgStyle: { opacity: 0 }
     })
  }

  scrollToMessage() {
    this.setState({
      statusBarStyle: { height: 80 },
      labelStyle: { opacity: 0, height: 0 },
      dateStyle: { fontSize: '1.5em', opacity: 0, height: 0 },
      msgStyle: {}
     })
  }

  unscroll() {
    this.setState({
      isScrolled: false,
      statusBarStyle: {},
      labelStyle: {},
      dateStyle: {},
      msgStyle: {}
     })
  }

  render() {
    return (
      <div className="App">

        <div id="sticky-top">
          <div id="header">D H</div>

          <StatusBar
            message={this.state.message}
            statusBarStyle={this.state.statusBarStyle}
            labelStyle={this.state.labelStyle}
            dateStyle={this.state.dateStyle}
            msgStyle={this.state.msgStyle}
            isSaved={this.state.isSaved} />
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
