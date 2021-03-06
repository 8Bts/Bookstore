import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/style.css';

const books = [
  {
    id: Math.round(Math.random() * 1000),
    title: 'Six Pillars of Self-Esteem',
    category: 'Learning',
  },
  {
    id: Math.round(Math.random() * 1000),
    title: 'Ruby',
    category: 'Learning',
  },
];

const initialState = {
  books,
  filter: 'ALL',
};

const store = createStore(reducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
