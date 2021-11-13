import {configure} from 'axios-hooks';
import React from 'react';
import MyReviewPage from './src/components/screens/my-review/MyReviewPage';
import axios from './src/utils/axios';

const App = (): JSX.Element => {
  return <MyReviewPage />;
};

/* Global Axios Instance */
configure({axios: axios.axiosInstance});

export default App;
