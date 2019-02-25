import React from 'react';
import { withRouter } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      page: 1,
      list: [],
      error: null,
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  }

  componentDidMount() {
    if (this.state.username === "") {
      this.setState({
        username: this.props.usernameParam,
      }, () => this.sendSearch())
    }
  }

  updateSearch(e) {
    this.setState({ username: e.target.value });
  }

  sendSearch(e) {
    if (e) {
      e.preventDefault();
    }

    const { username, page, list } = this.state;

    this.props.startLoad();

    this.props.fetchUser(username, page).then(
      pageData => this.handleSuccess(pageData),
      error => this.handleError(error)
    );
  }

  handleSuccess(pageData) {
    const { username, page, list } = this.state;

    if (pageData.anime.length === 0) {
      this.resetSearch();
      this.props.endLoad();
      this.props.receiveUser({
        username,
        list
      });
      this.props.history.push(`/${username}`);
    } else {
      this.setState({
        page: page + 1,
        list: list.concat(pageData.anime),
      }, () => setTimeout(1000, this.sendSearch()));
    }
  }

  handleError({ status }) {
    const errors = {
      400: `Username '${this.state.username}' not found`,
      404: `Invalid username`,
      429: "The API is a bit too busy - please try again in a few seconds",
    };

    this.props.endLoad();
    this.resetSearch(errors[status]);
  }

  resetSearch(error) {
    this.setState({
      page: 1,
      list: [],
      error,
    });
  }

  render() {
    if (this.props.loading) { return <PulseLoader color={'#eeeeee'}/> };
    return (
      <div className="SearchBar-container">
        <form
          className="SearchBar-search"
          onSubmit={this.sendSearch}
        >
          <input
            className="SearchBar-input"
            onChange={this.updateSearch}
            value={this.state.username}
            placeholder="username"
          />
          <button className="SearchBar-button">
            Search
          </button>
        </form>
        <div className="SearchBar-errors">
          { this.state.error }
        </div>
      </div>
    )
  }
}

export default withRouter(SearchBar);
