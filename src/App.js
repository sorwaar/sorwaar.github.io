import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div id="sorwar-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="sorwar-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
