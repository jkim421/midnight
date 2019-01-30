import React from 'react';
import { withRouter } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "wisetail",
      page: 1,
      list: [],
      loading: false,
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  }

  componentDidMount() {
    // this.sendSearch();
  }

  resetSearch() {
    this.setState({
      username: "",
      page: 1,
      list: [],
    });
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
      error => this.handleError()
    );
  }

  handleSuccess(pageData) {
    const page = this.state.page;
    const list = this.state.list;

    if (pageData.anime.length === 0) {
      this.resetSearch();
      this.props.receiveUser(list);
      this.props.history.push("/list");
    } else {
      this.setState({
        page: page + 1,
        list: list.concat(pageData.anime),
      }, () => setTimeout(1000, this.sendSearch()));
    }
  }

  handleError() {
    this.resetSearch();
  }

  render() {
    if (this.props.loading) { return <PulseLoader /> };
    return (
        <form
          onSubmit={this.sendSearch}>
          <input
            className=""
            onChange={this.updateSearch}
            value={this.state.username}
            placeholder="username"
          />
          <button
            className=""
            disabled={this.state.loading}>
            Search
          </button>
        </form>
    )
  }
}

export default withRouter(SearchBar);
