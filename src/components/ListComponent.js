import React from 'react';
import Calendar from 'react-icons/lib/fa/calendar';
import User from 'react-icons/lib/fa/user'

export class NewsList extends React.Component{
  isActive = (author) => {
    if(author === "arsho"){
      return "active";
    }
    return "not_active";
  }
  render(){
    var news_list = this.props.news_list.map((news, index) => {
      return <div key={index} className="news">
        <h3 className = "news-title">
          {news.news_title}
        </h3>
          <small>
            <span className = {this.isActive(news.news_author)}>
             <User /> {news.news_author}
            </span>
            <span className = "right">
            <Calendar /> {news.news_date?news.news_date.toDateString():""}
            </span>
          </small>
        <p>
          {news.news_body}
        </p>
      </div>
    });
    return (
      <div className = "news-wrapper">
          {news_list}
      </div>
    )
  }
}

NewsList.defaultProps = {
  news_list :
  [
    {
      id: 1,
      news_title:"News 1 default",
      news_body:"News 1 body",
      news_date:new Date("12/10/2017"),
      news_author: "David",
      news_publisher: "Alice"
    },
    {
      id: 2,
      news_title:"News 2 default",
      news_body:"News 2 body",
      news_date:new Date("12/11/2017"),
      news_author: "Kevin",
      news_publisher: "Bob"
    }
  ]
}

export class NewsCategory extends React.Component{
  render(){
    var news_category_list = this.props.news_category_list.map(
      function(category, category_index){
        return <li key = {category_index}>{category}</li>
      }
    );
    return (
      <div className = "list-wrapper">
        <ol>
          {news_category_list}
        </ol>
      </div>
    )
  }
}
