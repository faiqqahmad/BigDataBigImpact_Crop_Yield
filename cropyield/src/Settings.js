import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 50,
      checkboxValue: false,
    };
  }

  handleSliderChange = (event) => {
    this.setState({ sliderValue: event.target.value });
  }

  handleCheckboxChange = (event) => {
    this.setState({ checkboxValue: event.target.checked });
  }

  render() {
    return (
      <div>
        <h2>Settings</h2>
        <label>
          Slider Value: {this.state.sliderValue}
          <input type="range" min="0" max="100" value={this.state.sliderValue} onChange={this.handleSliderChange} />
        </label>
        <br />
        <label>
          Checkbox Value: {this.state.checkboxValue ? 'On' : 'Off'}
          <input type="checkbox" checked={this.state.checkboxValue} onChange={this.handleCheckboxChange} />
        </label>
      </div>
    );
  }
}

export default Settings;