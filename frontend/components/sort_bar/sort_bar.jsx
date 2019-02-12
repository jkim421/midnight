import React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  selectedSort(sortNum) {
    if (this.props.sort === sortNum) {
      return "SortBar-option-selected";
    }
  }

  render() {
    return (
      <div className="SortBar-container">
        <div
          className={`SortBar-option ${ this.selectedSort(1) }`}
          onClick={ () => this.props.updateSort(1) }
        >
          A-Z
        </div>
        <div
          className={`SortBar-option ${ this.selectedSort(2) }`}
          onClick={ () => this.props.updateSort(2) }
        >
          Z-A
        </div>
        <div
          className={`SortBar-option ${ this.selectedSort(3) }`}
          onClick={ () => this.props.updateSort(3) }
        >
          Score Asc
        </div>
        <div
          className={`SortBar-option ${ this.selectedSort(4) }`}
          onClick={ () => this.props.updateSort(4) }
        >
          Score Desc
        </div>
        <div
          className={`SortBar-option ${ this.selectedSort(5) }`}
          onClick={ () => this.props.updateSort(5) }
        >
          Start Yr Asc
        </div>
        <div
          className={`SortBar-option ${ this.selectedSort(6) }`}
          onClick={ () => this.props.updateSort(6) }
        >
          Start Yr Desc
        </div>
        <div
          className={`SortBar-option ${ this.selectedSort(7) }`}
          onClick={ () => this.props.updateSort(7) }
        >
          End Yr Asc
        </div>
        <div
          className={`SortBar-option ${ this.selectedSort(8) }`}
          onClick={ () => this.props.updateSort(8) }
        >
          End Yr Desc
        </div>
      </div>
    )
  }
}

export default SortBar;
