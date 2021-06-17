import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>category</th>
    </tr>
    {books.map((book) => (
      <tr key={book.id}>
        <th>{book.id}</th>
        <th>{book.title}</th>
        <th>{book.category}</th>
      </tr>
    ))}
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
