import React from 'react';
import selectAnime from '../../selectors/user_selectors';
import merge from 'lodash/merge';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      page: 1,
      list: [],
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  }

  resetSearch() {
    this.setState({
      username: "",
      page: 1,
      list: [],
    })
  }

  updateSearch(e) {
    this.setState({ username: e.target.value })
  }

  sendSearch(e) {
    if (e) {
      e.preventDefault();
    }

    const { username, page, list } = this.state;

    this.props.fetchUser(username, page)
      .then(pageData => this.handleSuccess(pageData));
  }

  handleSuccess(pageData) {
    const page = this.state.page;
    const list = this.state.list;

    if (pageData.anime.length === 0) {
      this.resetSearch();
      debugger
      this.props.receiveUser(list);
    } else {
      this.setState({
        page: page + 1,
        list: list.concat(pageData.anime),
      });
      this.sendSearch();
    }
  }

  render() {
    return (
      <div>
        <h1>midnight</h1>
        <form
          onSubmit={this.sendSearch}>
          <input
            className="home-search"
            onChange={this.updateSearch}
            placeholder="username"
          />
          <button
            className="">
            Search
          </button>

        </form>
      </div>
    )
  }
}

export default HomePage;
