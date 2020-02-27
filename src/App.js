import React from 'react';
import './App.css';
import StatusBar from './statusBar';
import Content from './content'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      isSaved: true,
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
  }

  scrollHandler() {
    const trigger = 50;
    let scrollPos = window.scrollY;
    if(scrollPos > trigger && !this.state.isScrolled) {
      this.setState({ isScrolled: true })
    }
    else if (scrollPos < trigger && this.state.isScrolled) {
      this.setState({ isScrolled: false })
    }
  }

  render() {
    return (
      <div className="App">

        <div id="sticky-top">
          <div id="header">D H</div>
          <StatusBar isScrolled={this.state.isScrolled} isSaved={this.state.isSaved} />
        </div>
        <Content action={this.itemClickHandler} />
      </div>


    )
  }
}

export default App;
