import React from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props { }

interface State {
  robotGallery: any[];
  count: number;
} 

class App extends React.Component<Props, State> {
  // * Lifecycle
 
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0
    };
  }
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }
 
  componentDidUpdate() { }
  
  componentWillUnmount(){}
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>Online Shopping</h1>
        </div>
        <button
          onClick={() => {
            this.setState((preState, preProps) => {
              return { count: preState.count + 1 }
            }, () => {
              console.log("count", this.state.count);
            });
            this.setState((preState, preProps) => {
              return { count: preState.count + 1 }
            }, () => {
              console.log("count", this.state.count);
            });
          }}
        > 
          Click
        </button>
        <span>count:{this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r,index) => (
            <Robot id={r.id} email={r.email} name={r.name} key={index} />
          ))}
        </div> 
      </div> 
    );
  }
}

export default App;
