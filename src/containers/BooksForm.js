import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import CATEGORIES from '../constants/categories';

const BooksForm = ({ createBook }) => {
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
    <div className="add-form">
      <h2 className="add-book-h">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} id="bookTitle" type="text" value={title} placeholder="Book title" />
        <select onChange={handleSelectChange}>
          {CATEGORIES.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
        </select>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

BooksForm.propTypes = { createBook: PropTypes.func.isRequired };

const mapDispatchToProps = {
  createBook,
};

export default connect(null, mapDispatchToProps)(BooksForm);
