import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import App from './components/App';

const books = [
  {
    id: Math.round(Math.random() * 1000),
    title: 'Six Pillars of Self-Esteem',
    category: 'Sientific',
  },
  {
    id: Math.round(Math.random() * 1000),
    title: 'Ruby',
    category: 'Programming',
  },
];

const initialState = {
  books,
  filter: 'ALL',
};

const store = createStore(reducer, initialState);
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
