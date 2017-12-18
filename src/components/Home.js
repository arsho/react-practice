import React from 'react';
import {NewsList} from './NewsList';
import {PageTitle} from './HeaderComponent';

export class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      news_list: [
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
      ],
      picture_list: []
    }
  }

  componentDidMount(){
    var url = "http://127.0.0.1:8000/api/news.json";
    fetch(url)
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
      this.setState({news_list: data});
    });
  }

  render(){
    return (
      <div className="content">
      <PageTitle page_title = 'Newsroom' />
      <NewsList news_list = {this.state.news_list} />
      {/*<PictureGallary picture_list = {this.state.picture_list} />*/}
      </div>
    )
  }
}


// var photo_url = "https://randomuser.me/api/?format=json&gender=male&inc=picture&results=50";
