import React, { Component } from 'react';
import { Menu, Input, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '..//..//actions/authActions';

// import "./navbar.css";

// const icons = ['images', 'heart outline', 'compass'];

class Navbar extends Component {
  renderAuthLinks() {
    // if(this.props.authenticated){
    return (
      [<Menu.Item key={1} position='right'>
        <Input className='icon' icon='search' placeholder='Search...' />
      </Menu.Item>,


      <Menu.Item key={2}>
        <Link to='/post'>
          <Icon color='black' size='large' name='image' />
        </Link>
      </Menu.Item>,

      <Menu.Item key={3}>
        <Link to='/explore'>
          <Icon color='black' size='large' name='compass' />
        </Link>
      </Menu.Item>,

      <Menu.Item key={4}>
        <Icon color='black' size='large' name='heart outline' />
      </Menu.Item>,

      <Menu.Item key={5} onClick={() => this.props.signOut()}>
        Sign Out
      </Menu.Item>
      ]
    )
    // }
  }

  render() {
    return (
      <Menu style={{ height: '70px', display: "flex", margin: "150px 10px 0px 10px" }}>
        <Link to='/'>
          <Menu.Item>
            <Image size='mini' src={'https://i.imgur.com/J9Dq2im.png?2'} />
          </Menu.Item>
        </Link>

        {this.renderAuthLinks()}

      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(Navbar);


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/home"
//               className={
//                 window.location.pathname === "/home" || window.location.pathname === "/home"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/profile"
//               className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
//             >
//               Profile
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
