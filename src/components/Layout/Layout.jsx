import React, { PropTypes } from 'react';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="[ container ]">
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Test Application</a>
              </nav>
            </div>
          </div>
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}

export default Layout;
