import './App.css';
import React, {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./store/reducers/appReducer";
import Preloader from "./components/#common/Preloader/Preloader";
import {Route} from "react-router-dom";
import ContactsContainer from "./components/contacts/ContactsContainer";
import Login from "./components/login/Login";

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()

  }


  render() {
    if (!this.props.initialized) return <Preloader/>
    return (
      <div className="App">
        <Route
          path={'/'}
          render={()=> <ContactsContainer />}
        />
        <Route
          path={'/login'}
          render={()=> <Login/>}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    initialized: state.appReducer.initialized,
    isAuth: state.authReducer.isAuth
  }
}

export default connect(mapStateToProps,{initializeApp})(App)
