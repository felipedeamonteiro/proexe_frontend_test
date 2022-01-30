import type { NextPage } from 'next';
import AppHome from './dashboard';
import { Provider } from 'react-redux';
import store from '../store';

const Home: NextPage = () => (
  <Provider store={store}>
    <AppHome />
  </Provider>
)

export default Home
