import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    let {title, task} = this.props
    return ( <button onClick = { task }> { title }<button/>
    )}
};
