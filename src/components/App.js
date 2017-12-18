import React from 'react';
import {NavigationBar} from './HeaderComponent';
import {AboutUs} from './AboutUs';
import {Error404} from './Error404';
import {Route, Switch} from 'react-router-dom';
import { NewsDetail } from './NewsDetail';
import { Home } from './Home';

const Main = () => (
  <main>
  <Switch>
  <Route exact path = '/' component = {Home} />
  <Route exact path = '/about' component = {AboutUs} />
  <Route exact path = '/error' component = {Error404} />
  <Route path = "/news/:id" component = {NewsDetail} />
  <Route path="*" component={Error404} />
  </Switch>
  </main>
)

export class App extends React.Component {
  render(){
    return (
      <div className = "app">
      <NavigationBar />
      <Main />
      </div>
    )
  }
}


// import { PictureGallary } from './PictureGallery';
/*
[
{
id: 1,
news_title:"News 1",
news_body:"News 1 body",
news_date:new Date("12/10/2017"),
news_author: "David",
news_publisher: "Alice"
},
{
id: 2,
news_title:"News 2",
news_body:"News 2 body",
news_date:new Date("12/11/2017"),
news_author: "Kevin",
news_publisher: "Bob"
}
]
*/
