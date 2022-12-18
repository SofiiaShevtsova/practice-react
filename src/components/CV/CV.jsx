import SiteBar from './SiteBar';
import Main from './Main';

const { Component } = require('react');

class Resume extends Component {
  state = {};
  render() {
    return (
      <>
      <SiteBar/>  
       <Main/> 
      </>
    );
  }
}

export default Resume;
