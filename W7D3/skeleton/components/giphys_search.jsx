import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      searchItem: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys("corgi");
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ searchItem: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const searchItem = this.state.searchItem.split(' ').join('+');
    this.props.fetchSearchGiphys(searchItem);
  }

  render() {
    let { giphys } = this.props;

    return (
      <div>
        <form>
          <input onChange={this.handleChange} type="text" value={this.state.searchTerm}></input>
          <input onClick={this.handleSubmit} type="submit" value="Search"></input>
        </form>
        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
