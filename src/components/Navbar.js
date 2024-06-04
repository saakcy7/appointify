import "./NavbarStyles.css";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import {Player,Lottie} from '@lottiefiles/react-lottie-player';
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const mystyle = {
      width: "100px",
      height: "100%",
      backgroundColor: "transparent",
      
      marginBottom: "20px",

    };
    return (
      <nav className="NavbarItems">
       <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

<Player className="player" autoplay loop src="https://lottie.host/c03e2642-1d0f-4dc1-8404-852f6b52b777/z4qVGbVRf0.json" background="transparent" speed="1" style={mystyle}></Player><h1 className="navbar-logo"><strong>Appointify</strong></h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
