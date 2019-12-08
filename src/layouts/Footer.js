import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route
        path="/"
        exact
        render={props => (
          <p>
            You are in <span>home page</span>
          </p>
        )}
      />

      <Route
        path="/:page"
        exact
        render={props => {
          console.log(props);
          return (
            <>
              <p>
                You are in <span>{props.match.params.page}</span>
              </p>
              <p>
                You are in <span>{props.match.url}</span>
              </p>
              <p>
                You are in <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={props => {
          console.log(props);
          return (
            <>
              <p>
                You are in <span>{props.match.params.idProduct}</span>
              </p>
              <p>
                You are in <span>{props.match.url}</span>
              </p>
              <p>
                You are in <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
