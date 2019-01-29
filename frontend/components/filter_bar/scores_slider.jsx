import React from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class ScoresSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUpdate(score) {
    const types = this.props.types;
    if (types.includes(type)) {
      this.props.removeType(type);
    } else {
      this.props.addType(type);
    }
  }

  render() {
    return (
      <Nouislider
        range={{ min: 0.0, max: 10.0 }}
        start={[0.0, 10.0]}
        margin={1.0}
        connect />
    )
  }
};

export default ScoresSlider;
