import React from 'react';
import {NewsList} from './NewsList';
import {PageTitle, NavigationBar} from './HeaderComponent';
import {AboutUs} from './AboutUs';
import {Error404} from './Error404';
import {Route, HashRouter, Switch} from 'react-router-dom';
import { PictureGallary } from './PictureGallery.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/about' component = {AboutUs} />
      <Route exact path = '/error' component = {Error404} />
    </Switch>
  </main>
)

export class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      news_list: [
        {
          title:"News 1",
          body:"News 1 body",
          date:new Date("12/10/2017"),
          author: "David"
        },
        {
          title:"News 2",
          body:"News 2 body",
          date:new Date("12/13/2017"),
          author: "arsho"
        },
        {
          title:"News 3",
          body:"News 3 body",
          date:new Date("12/5/2017"),
          author: "arsho"
        },
        {
          title:"News 4",
          body:"News 4 body",
          date:new Date("12/4/2017"),
          author: "Alice"
        }
      ],
      picture_list: []
    }
  }

  componentDidMount(){
    var url = "http://127.0.0.1:8000/api/news.json";
    // fetch(url,{
    //   mode: 'no-cors',
    //   method: 'get'
    // })
    fetch("https://randomuser.me/api/?format=json&gender=male&inc=picture&results=50")
    .then(response=>{
      if(response.status >= 500){
        throw new Error("Bad response from server");
      }
      else if(response.status >= 400){
        throw new Error("Bad request format");
      }
      return response.json();
    })
    .then(data=>{
      this.setState({picture_list: data});
    });
  }

  render(){
    return (
      <div className="content">
      <PageTitle page_title = 'Newsroom' />
      <NewsList news_list = {this.state.news_list} />
      <PictureGallary picture_list = {this.state.picture_list} />
      </div>
    )
  }

}

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
/*
[
  {
    title:"News 1",
    body:"News 1 body",
    date:new Date("12/10/2017"),
    author: "David"
  },
  {
    title:"News 2",
    body:"News 2 body",
    date:new Date("12/13/2017"),
    author: "arsho"
  },
  {
    title:"News 3",
    body:"News 3 body",
    date:new Date("12/5/2017"),
    author: "arsho"
  },
  {
    title:"News 4",
    body:"News 4 body",
    date:new Date("12/4/2017"),
    author: "Alice"
  }
]
*/
