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
          {news.title}
        </h3>
          <small>
            <span className = {this.isActive(news.author)}>
             <User /> {news.author}
            </span>
            <span className = "right">
            <Calendar /> {news.date.toDateString()}
            </span>
          </small>
        <p>
          {news.body}
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
        title:"News 1 Default",
        body:"News 1 body",
        date:new Date("12/10/2017"),
        author: "David"
      },
      {
        title:"News 2 Default",
        body:"News 2 body",
        date:new Date("12/13/2017"),
        author: "arsho"
      },
      {
        title:"News 3 Default",
        body:"News 3 body",
        date:new Date("12/5/2017"),
        author: "arsho"
      },
      {
        title:"News 4 Default",
        body:"News 4 body",
        date:new Date("12/4/2017"),
        author: "Alice"
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
