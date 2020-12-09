import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

  }
  render() {
    const date = new Date();
    const time = date.getHours();
    const timmin=date.getMinutes();
    const timesec=date.getSeconds();
    return (   
    <div className='footer'>
      <h1> Have a nice day </h1>
    <h1>   {"\t"}{time} : {timmin} : {timesec}</h1>
    </div>
     );
  }
}
 
export default Footer;