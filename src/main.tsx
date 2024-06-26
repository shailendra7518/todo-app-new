import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {store} from './state/store';
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
