import React from 'react';
import ReactDOM from 'react-dom';
import SearchLink from './SearchLink';
import {Button, Collapse, Well} from 'react-bootstrap';

export default class DevAndContribLinks extends React.Component {
  constructor(props) {
    super(props);
    this.showAffiliationsBtn = this.showAffiliationsBtn.bind(this);
    this.createAuthorsLink = this.createAuthorsLink.bind(this);
    this.createAffiliationsList = this.createAffiliationsList.bind(this);
    this.state = {
      affiliationsOpen: false,
      affiliationStateLabel: <span>
          <span className='fa fa-plus-square-o'></span>&nbsp; Show Author Affiliations</span>
    }
  }

  createAuthorsLink(row, index, array) {
    return (
      <span key={index}>
        <SearchLink field="developers_contributors" value={row.name.trim()}/> {(row.sup_count && row.sup_count.length > 0) && <span>
          {row.sup_count.map((item, index2) => <sup key={index2}>[{item}]</sup>)}
        </span>}
        {row.orcid && <span>&nbsp;
          <img className='orc-id-img' src='https://orcid.org/sites/default/files/images/orcid_16x16(1).gif'/>
        </span>}
        {((index + 1) < array.length) && <span>
          ;&nbsp;
        </span>}
      </span>
    );
  }

  createAffiliationsList(items) {
    var affiliations_list = [];

    var affiliation_index = 0;
    items.forEach(function(row) {
      if (row.affiliations && row.affiliations.length > 0) {
        row.affiliations.forEach(function(affiliation) {
          if (affiliation && affiliation != 'null') {
            affiliations_list.push(
              <li key={affiliation_index}>{affiliation}</li>
            );
          }
          affiliation_index++;
        });
      }
    });

    return affiliations_list;
  }

  showAffiliationsBtn() {
    var new_state = !this.state.affiliationsOpen
    var new_state_label = (this.state.affiliationsOpen == false)
      ? (
        <span>
          <span className='fa fa-minus-square-o'></span>
          &nbsp;Hide Affiliations
        </span>
      )
      : (
        <span>
          <span className='fa fa-plus-square-o'></span>
          &nbsp;Show Affiliations
        </span>
      );
    this.setState({
      affiliationsOpen: !this.state.affiliationsOpen,
      affiliationStateLabel: new_state_label
    });
  }

  render() {
    var authors = this.props.items;
    /*First, we go through and strip out all "none, none"*/
    var refinedAuthorsList = [];
    authors.forEach(function(row) {
      //If it's the search page, we'll have this
      if (row.name && row.name.toLowerCase().trim() != 'none, none') {
        refinedAuthorsList.push(row);
      } else if (row.first_name) { //We'll have this on the biblio page
        var conjoined_name = row.last_name + ", " + row.first_name;
        if (conjoined_name.toLowerCase() != 'none, none') {
          row.name = conjoined_name;
          refinedAuthorsList.push(row);
        }
      }
    });

    /*Now then, if we are on the search page, we will go ahead and trim out all but 3 authors*/
    if (this.props.searchPage && refinedAuthorsList.length > 3) {
      refinedAuthorsList = refinedAuthorsList.slice(0, 3);
    }

    /*Now we go through, and assign a series of numbers that will be the affiliations references. You'll see what I mean*/
    var affiliations_count = 1;
    for (var i = 0; i < refinedAuthorsList.length; i++) {
      var countArr = [];
      //Go through each affiliation. If it's a valid one, tack on another number to show in the superscript thing in the link
      if (refinedAuthorsList[i].affiliations) {
        refinedAuthorsList[i].affiliations.forEach(function(row) {
          if (row && row != 'null') {
            countArr.push(affiliations_count);
            affiliations_count++;
          }
        });
      }
      refinedAuthorsList[i].sup_count = countArr;
    }

    const authorsContent = refinedAuthorsList.map(this.createAuthorsLink);
    const affiliations_list = this.createAffiliationsList(refinedAuthorsList);

    return (
      <div>
        <div>
          {authorsContent}
          {(this.props.searchPage && authors.length > 3) && <span>;&nbsp;&hellip;</span>}
          {this.props.releaseDate}
        </div>
        <div>
          {(affiliations_list && affiliations_list.length > 0 && !this.props.searchPage) > 0 && <div>
            <button type="button" className="btn btn-link" onClick={this.showAffiliationsBtn}>{this.state.affiliationStateLabel}</button>
            <Collapse in={this.state.affiliationsOpen}>
              <div>
                <ol>
                  {affiliations_list}
                </ol>
              </div>
            </Collapse>
          </div>}
        </div>
      </div>
    );
  }

}
