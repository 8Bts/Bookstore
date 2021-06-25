import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import NavBar from '../containers/NavBar';

const App = () => (
  <div>
    <NavBar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
