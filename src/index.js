import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './components/ErrorPage'


import TopicContent from './components/TopicContent';
import DetailedSearchPage from "./components/DetailedSearchPage"
import QuickSearchPage from './components/QuickSearchPage';
import FunTopicHomePage from './components/FunTopicPage';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/home",
        element: <Home/>
      },
      {
        path: "/fun",
        element: <FunTopicHomePage/>
      },
      {
        path:"/quicksearch",
        element: <QuickSearchPage/>
      },
      {
        path:"quicksearch/topicdetail/:id",
        element: <TopicContent/>
      },
      {
        path:"/detailsearch",
        element: <DetailedSearchPage/>
      },
      {
        path:"detailsearch/topicdetail/:id",
        element: <TopicContent/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
