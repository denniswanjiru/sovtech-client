import React from "react";
import AppContext, { Consumer } from "./AppContext";

export default function withAppContext(Component) {
  return function WrapperContext(props) {
    return (
      <AppContext>
        <Consumer>
          {(state) => {
            return <Component  {...props} context={state}/>
          }}
        </Consumer>
      </AppContext>
    )
  }
}