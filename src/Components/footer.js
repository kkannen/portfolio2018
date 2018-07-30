import React, { Component } from 'react';

class Footer extends Component {

  iconStyle = {
    backgroundImage: `url(${this.props.icon})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'}
    
  render() {
    return (
      <div className="footerIcon">
        <a className = 'iconContainer' href = {this.props.link} target = '_blank'>
          <div className = 'lilDot'></div>
          <div className = 'footIcon' style = {this.iconStyle}></div>
        </a>
      </div>
    );
  }
}

export default Footer;
