import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>category</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state,
});

export default connect(mapStateToProps, null)(BooksList);
