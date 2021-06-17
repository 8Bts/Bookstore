import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <th>{book.id}</th>
    <th>{book.title}</th>
    <th>{book.category}</th>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
