import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>{<Header />}</header>
          <main>
            <aside>{<Navigation />}</aside>
            <section className="page">{<Page />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
