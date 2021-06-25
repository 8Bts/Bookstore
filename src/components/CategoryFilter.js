import PropTypes from 'prop-types';
import CATEGORIES from '../constants/categories';

const CategoryFilter = ({
  filter, handleFilterChange,
}) => (
  <select className="select-filter form-select form-select-sm" onChange={(event) => handleFilterChange(event.target.value)} value={filter}>
    {
        CATEGORIES.map((category) => (
          <option key={category} value={category}>{category}</option>))
      }
    <option value="ALL">ALL</option>
  </select>
);

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
