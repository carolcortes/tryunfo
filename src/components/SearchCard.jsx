import React from 'react';
import PropTypes from 'prop-types';

class SearchCard extends React.Component {
  render() {
    const { handleSearchName } = this.props;
    return (
      <label htmlFor="search-card">
        <input
          data-testid="name-filter"
          type="text"
          name="search-card"
          id="search-card"
          onChange={ handleSearchName }
        />
      </label>
    );
  }
}

SearchCard.propTypes = {
  handleSearchName: PropTypes.func.isRequired,
};

export default SearchCard;
