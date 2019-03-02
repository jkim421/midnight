import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
      howtoOpen: false,
      aboutOpen: false,
    };
  }

  sectionOpen(header, section) {
    if (header) {
      if (!this.state[section]) {
        return "HomePage-header HomePage-header-closed"
      } else {
        return "HomePage-header HomePage-header-open";
      }
    } else {
      if (!this.state[section]) {
        return "HomePage-content HomePage-section-closed"
      } else {
        return "HomePage-content HomePage-section-open";
      }
    }
  }

  toggleSection(section) {
    this.setState({
      [section]: !this.state[section]
    });
  }

  render() {
    return (
      <div className="HomePage-container">
        <h1 className="HomePage-title">midnite</h1>
        <SearchBarContainer path={this.props.path} home={true}/>
        <div className="HomePage-details">
          <div
            className={`${this.sectionOpen(true, "howtoOpen")}`}
            onClick={ () => this.toggleSection("howtoOpen") }>
            how to use
          </div>
          <div className={`${this.sectionOpen(false, "howtoOpen")}`}>
            <div className="HomePage-howto">
              <div>
                1. Run the&nbsp;
                <a
                  className="HomePage-link"
                  href="https://greasyfork.org/en/scripts/7125-myanimelist-mal-tags-updater"
                  target="_blank"
                >
                  MAL Tags Updater
                </a>
              </div>
              <div>
                2. Search a MAL username (e.g. wisetail)
              </div>
            </div>
            <div className="HomePage-howto2">
              <i>without running the tags updater, lists can still be sorted/filtered on everything but score and genre</i>
            </div>
          </div>
          <div
            className={`${this.sectionOpen(true, "aboutOpen")}`}
            onClick={ () => this.toggleSection("aboutOpen") }>
            about
          </div>
          <div className={`${this.sectionOpen(false, "aboutOpen")}`}>
            <div className="HomePage-about">
              <div>
                midnite utilizes the&nbsp;
                <a
                  className="HomePage-link"
                  href="https://jikan.moe/"
                  target="_blank"
                >
                  Jikan API
                </a>
                &nbsp;and&nbsp;
                <a
                  className="HomePage-link"
                  href="https://greasyfork.org/en/scripts/7125-myanimelist-mal-tags-updater"
                  target="_blank"
                >
                  MAL Tags Updater
                </a>
              </div>
              <div className="HomePage-about2">
                for questions or comments, reach me at jkim21@pm.me
              </div>
              <br/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
