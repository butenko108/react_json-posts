import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/App';
import { store } from './app/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
import './index.css';

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
