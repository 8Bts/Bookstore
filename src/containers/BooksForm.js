import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from '../actions/index';

const BooksForm = ({ createBook }) => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      createBook({
        id: Math.round(Math.random() * 1000),
        title,
        category,
      });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleSelectChange}>
        {CATEGORIES.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
      </select>
      <label htmlFor="bookTitle">
        Title:
        <input onChange={handleInputChange} id="bookTitle" type="text" value={title} />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

BooksForm.propTypes = { createBook: PropTypes.func.isRequired };

const mapDispatchToProps = {
  createBook: Actions.createBook,
};

export default connect(null, mapDispatchToProps)(BooksForm);
