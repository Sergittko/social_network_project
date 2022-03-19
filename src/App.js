import "./App.css";
import { Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import UsersContainer from "./components/Users/UsersContainer";
import Apps from "./components/Apps/Apps";
import Login from "./components/Login/Login";
import Preloader from "./components/common/preloader/Preloader";
import preloaderGif from "./img/preloader.gif";
import { withRouter, Redirect } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app_reducer";
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const Settings = lazy(() =>
  import("./components/Settings/Settings")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar data={this.props.dialogsData} />
        <div className="app__content">
          {this.props.isInitialized ? (
            <div className="app__content_container">
              <Suspense fallback={<Preloader preloaderGif={preloaderGif} />}>
                <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
                <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
                />
                <Route path="/login" render={() => <Login />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/apps" render={() => <Apps />} />
                <Route path="/settings" render={() => <Settings />} />
              </Suspense>
            </div>
          ) : (
            <Preloader preloaderGif={preloaderGif} />
          )}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  dialogsData: state.dialogsPage.dialogsData,
  isInitialized: state.app.isInitialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
