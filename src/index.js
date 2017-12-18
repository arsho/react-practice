import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './stylesheets/index.css';

import { App } from './components/App'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)







// import { NewsCategory } from './components/ListComponent'
//import { NewsList } from './components/ListComponent'

// const { render } = ReactDOM

// import { HashRouter, Route, Switch } from 'react-router-dom';

// <App/>,
// <HashRouter>
//   <Switch>
//     <Route path = "/" component = {App} />
//     <Route path = "*" component = {Error404} />
//   </Switch>
// </HashRouter>,
// news_list = {
//   [
//     {
//       title:"News 1",
//       body:"News 1 body",
//       date:new Date("12/10/2017"),
//       author: "David"
//     },
//     {
//       title:"News 2",
//       body:"News 2 body",
//       date:new Date("12/13/2017"),
//       author: "arsho"
//     },
//     {
//       title:"News 3",
//       body:"News 3 body",
//       date:new Date("12/5/2017"),
//       author: "arsho"
//     },
//     {
//       title:"News 4",
//       body:"News 4 body",
//       date:new Date("12/4/2017"),
//       author: "Alice"
//     }
//   ]
// }
// <NewsCategory news_category_list = {
//   ["Sports", "Entertainment", "Weather"]
// }/>
//window.React = React

// const { createElement } = React

// const style = {
//   backgroundColor: '#5b74a8',
//   color: '#ffffff',
//   fontFamily: 'verdana'
// }

// const header = createElement(
//   'h1',
//   {
//     id: 'header',
//     className: 'header',
//     style: style
//   },
//   'Hello Pure React!'
// )

// ReactDOM.render(
//   <div>
//   <h1>Hello From React JS</h1>
//   <ul>
//     <li>List item 1</li>
//     <li>List item 2</li>
//     <li>List item 3</li>
//     <li>List item 4</li>
//   </ul>
//   </div>,
//   document.getElementById('root')
// );
