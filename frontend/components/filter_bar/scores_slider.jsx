import React from 'react';
import Nouislider from "nouislider-react";
// import "nouislider/distribute/nouislider.css";

class ScoresSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.lowerHandle = null;
    this.upperHandle = null;
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.lowerHandle = document.getElementsByClassName("noUi-handle-lower")[0];
    this.upperHandle = document.getElementsByClassName("noUi-handle-upper")[0];
  }

  handleUpdate() {
    debugger
    const scores = [
      this.lowerHandle.attributes[7].textContent,
      this.upperHandle.attributes[7].textContent
    ];
    this.props.updateScores(scores);
  }

  render() {
    return (
      <Nouislider
        range={{ min: 0.0, max: 10.0 }}
        start={[0.0, 10.0]}
        margin={0.1}
        tooltips={[wNumb({decimals: 1}), wNumb({decimals: 1})]}
        connect
        onChange={this.handleUpdate}/>
    )
  }
};

export default ScoresSlider;
