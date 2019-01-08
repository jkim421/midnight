import React from 'react';
import selectAnime from '../../selectors/user_selectors';
import merge from 'lodash/merge';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      page: 1,
      data: [],
    }
    this.sendSearch = this.sendSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  sendSearch(e) {
    if (e) {
      e.preventDefault();
    }

    const username = this.state.username;

    let validPage = true;
    let page = this.state.page;
    let data = this.state.data;

    $.ajax({
      method: 'GET',
      url: `https://api.jikan.moe/v3/user/${username}/animelist/all/${page}`,
      success: (pageData) => {
        if (pageData.anime.length === 0) {
          validPage = false;
          debugger
          this.props.receiveUser(data);
        } else {
          this.setState({
            page: page + 1,
            data: data.concat(pageData.anime),
          });
          this.sendSearch();
        }
      },
    });

    // while (validPage === true) {
    //   this.props.fetchUser(this.state.username, page).then(
    //     pageData => {
    //       debugger
    //       if (pageData.anime.length === 0) {
    //         validPage = false;
    //       } else {
    //         page += 1;
    //         data = data.concat(pageData.anime);
    //       }
    //     }
    //   );
    // }
    // this.props.fetchUser(this.state.username, page).then(
    //   pageData => {
    //     debugger
    //     this.props.receiveUser(pageData)
    //   }
    // );
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
