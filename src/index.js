import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './index.css'
import './moduleLink.css'
const Start = () => <h1>Start</h1>
const chooseVideo = () => <h1>Series</h1>
const About = () => <h1>About</h1>



class NavBar extends React.Component {

  constructor(){
    super();
    this.state = {LinkStyle: ""}
    this.state.LinkStyle = {display: 'block',
      color: 'white',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none'
    };
  }

  onHoverr = () =>{
    this.setState({LinkStyle: {display: 'block',
    color: 'gray',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none'
    }}
    );
  };

  render() {
    return (
      <ul class="navlist">
        <li class="lstel">
          <Link className="Link" to="/">Start</Link>
          </li>
        <li class="lstel"><Link className="Link" to="/series">Series</Link></li>
        <li class="lstel"><Link className="Link" to="/about">About</Link></li>
      </ul> 
      )
  }
}

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Start} />
          <Route path='/series' component={chooseVideo} />
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

