import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="flex justify-between mx-auto py-12 items-center flex-wrap">
        <div className="font-medium text-2xl">
          <a href="/">The Yummi Pizza</a>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
