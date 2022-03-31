import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./profile.scss";

export class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        Profile
        <Footer />
      </>
    );
  }
}

export default Profile;
