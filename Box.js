
import React, { Component } from "react";


class Box extends React.Component {

  render() {
    var styl;
    styl = {
      marginRight: this.props.space + "px"
    }
    return (
      <div className="box" style={styl}>
        <span>100 px Height Box</span>
      </div>
    )
  }

}

export default Box;
