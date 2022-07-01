import React from 'react';
import PropTypes from 'prop-types';

class SearchCard extends React.Component {
  render() {
    const { handleSearch } = this.props;
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
          />
        </label>
        <label htmlFor="search-rare">
          <select
            data-testid="rare-filter"
            name="searchRare"
            id="search-rare"
            onChange={ handleSearch }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
      </div>
    );
  }
}

SearchCard.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchCard;
