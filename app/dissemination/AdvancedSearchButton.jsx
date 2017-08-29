import React from 'react';
import SearchData from '../stores/SearchData';

const searchData = new SearchData();
export default class AdvancedSearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search() {
    searchData.setValue("start", 0);
    window.sessionStorage.latestSearch = JSON.stringify(searchData.getData());
    window.location.href = "/doecode/results";
  }
  render() {
    return (
      <span>
        <button type="button" className="btn btn-lg btn-primary" onClick={this.search}>
          <span className="fa fa-search"></span>&nbsp; Search
        </button>
      </span>
    );
  }
}
