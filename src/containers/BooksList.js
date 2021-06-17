import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>category</th>
    </tr>
    {books.map((book) => (
      <Book key={book.id} book={book} />
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
