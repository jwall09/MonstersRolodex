/*
Author: Max Wallace
Date:  8/19/2022 
Purpose: This is the JSX component for the search box
used at the top of the page. It will filter through
the monsters[] by each letter typed into the box.
*/

import { Component } from "react";
import './search-box.styles.css';

// type search actually auto includes X and deletes content
class SearchBox extends Component {
  render() {
    return( 
      <input 
        className={`search-box ${this.props.className}`} 
        type='search' 
        placeholder={this.props.placeholder} 
        onChange={this.props.onChangeHandler}
      />
		)
  }
}

export default SearchBox;