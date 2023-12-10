import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './functionalcomponents/NewsApp/App';
// import {BrowserRouter,Routes,Route} from "react-router-dom"
//import reportWebVitals from './reportWebVitals';
//import TodoList from './functionalcomponents/Coresonant/TodoList';
//import FirstTask from './functionalcomponents/FirstTask'
//import SecondTask from './functionalcomponents/SecondTask'
//import Signup from './functionalcomponents/Netflixproject/Signup'
// import App from './functionalcomponents/Netflixproject/Components/App';
// import signup from './functionalcomponents/Netflixproject/signup.css';
// import Signin from './functionalcomponents/Netflixproject/Signin';
// import Movies  from './functionalcomponents/Netflixproject/Components/Description/Movies';
// import Tvshows from './functionalcomponents/Netflixproject/Components/Description/Tvshows';
// import Wishlist from './functionalcomponents/Netflixproject/Components/Description/Wishlist';
// import Moviesdescription from './functionalcomponents/Netflixproject/Components/Description/Moviesdescription';
// import MovieSearch from './functionalcomponents/Netflixproject/Components/MovieSearch';
//import Practice  from './functionalcomponents/Practice';
// import { Practice1 } from './functionalcomponents/Practice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Signup></Signup>} ></Route>
    //   <Route path='/app' element={<App></App>}></Route>
    //   <Route path='/signin' element={<Signin></Signin>}></Route> 
    //   <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
    //   <Route path='/movie' element={<Movies></Movies>}></Route>
    //   <Route path='/tvshows' element={<Tvshows></Tvshows>}></Route>
    //   <Route path='/moviedescription' element={<Moviesdescription></Moviesdescription>}></Route>
    //   <Route path="/search" element={<MovieSearch></MovieSearch>} />
    // </Routes>
    // </BrowserRouter>
    <div>
        <App></App>
    </div>
);
 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Redux/Shoping cart/App';
// import reportWebVitals from './reportWebVitals';
// import store from './Redux/Shoping cart/Store';
// import {Provider} from 'react-redux';
// import './Redux/Shoping cart/main.css'
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();