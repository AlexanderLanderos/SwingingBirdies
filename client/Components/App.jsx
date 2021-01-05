import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './Components/Buttons';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      totalSwingCount: 0,
      swingCount: 0,
      puttCount: 0,
    };
  }

  addSwing = () => {
    this.setState({
      swingCount: this.state.swingCount + 1,
      totalSwingCount: this.state.totalSwingCount + 1,
    });
  };

  dropSwing = () => {
    this.setState({
      swingCount: this.state.swingCount - 1,
      totalSwingCount: this.state.totalSwingCount - 1,
    });
  };

  addPutt = () => {
    this.setState({
      puttCount: this.state.puttCount + 1,
      totalSwingCount: this.state.totalSwingCount + 1,
    });
  };

  dropPutt = () => {
    this.setState({
      puttCount: this.state.puttCount - 1,
      totalSwingCount: this.state.totalSwingCount - 1,
    });
  };

  render() {
    let { totalSwingCount, swingCount, puttCount } = this.state;
    return (
      <div class='app'>
        <div>
          <div class='swingTrackerCount'>
            <h1> Total Strokes: {totalSwingCount}</h1>
            <h3> Swings: {swingCount}</h3>
            <h3> Putts: {puttCount}</h3>
          </div>
          <div class='buttons'>
            <Button title={'+ Swing'} action={this.addSwing} />
            <Button title={'- Swing'} action={this.dropSwing} />
            <Button title={'+ Putt'} action={this.addPutt} />
            <Button title={'- Putt'} action={this.dropPutt} />
          </div>
        </div>
      </div>
    );
  }
}
