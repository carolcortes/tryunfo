import React from 'react';
import PropTypes from 'prop-types';

class SearchCard extends React.Component {
  render() {
    const { handleSearch, disableSearch, searchTrunfo } = this.props;
    return (
      <div>
        <label htmlFor="search-name">
          Pesquisar carta:
          <input
            data-testid="name-filter"
            type="text"
            name="searchName"
            id="search-name"
            onChange={ handleSearch }
            disabled={ disableSearch }
          />
        </label>
        <label htmlFor="search-rare">
          <select
            data-testid="rare-filter"
            name="searchRare"
            id="search-rare"
            onChange={ handleSearch }
            disabled={ disableSearch }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="search-trunfo">
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="searchTrunfo"
            id="search-trunfo"
            checked={ searchTrunfo }
            onChange={ handleSearch }
          />
        </label>
      </div>
    );
  }
}

SearchCard.propTypes = {
  handleSearch: PropTypes.func,
  disableSearch: PropTypes.bool,
  searchTrunfo: PropTypes.bool,
}.isRequired;

export default SearchCard;
