import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    this.state = {
      username: "",
    }
    super(props);
  }

  sendSearch(e) {
    e.preventDefault();
    this.props.fetchUser(this.state.username);
  }

  updateSearch(e) {
    this.setState({ username: e.target.value })
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
