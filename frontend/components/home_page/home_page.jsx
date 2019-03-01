import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }

  render() {
    return (
      <div className="HomePage-container">
        <h1 className="HomePage-title">midnite</h1>
        <SearchBarContainer path={this.props.path}/>
        <div className="HomePage-details">
          <div className="HomePage-details-header">
            how to use
          </div>
          <div className="HomePage-details-content">
            <div className="HomePage-details-howto">
              <div>
                1. Run the &nbsp;
                <a href="https://greasyfork.org/en/scripts/7125-myanimelist-mal-tags-updater">
                  MAL Tags Updater
                </a>
              </div>
              <div>
                2. Search a username
              </div>
            </div>
            <br/>
            <div>
              <i>without running the tags updater, lists can still be sorted/filtered on everything but score and genre</i>
            </div>
          </div>
          <div className="HomePage-details-header">
            about
          </div>
          <div className="HomePage-details-about">
            <div>
              for questions or comments, reach me at jkim21@pm.me
            </div>
            <br/>
            <div>
              midnite relies on the <a href="https://jikan.moe/">Jikan API</a> and <a href="https://greasyfork.org/en/scripts/7125-myanimelist-mal-tags-updater">MAL Tags Updater</a> for its key functionality
            </div>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
