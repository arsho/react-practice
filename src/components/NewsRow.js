import React from 'react';
import Calendar from 'react-icons/lib/fa/calendar';
import User from 'react-icons/lib/fa/user';

const isAdmin = (author) => {
  if(author === 'arsho'){
    return "active";
  }
  else{
    return "not_active";
  }
}

export const NewsRow = ({news}) => (
  <div className="news">
  <h3 className="news-title"> {news.title} </h3>
  <small>
    <span className = {isAdmin(news.author)}> <User/> {news.author} </span>
    <span className="right">
      <Calendar /> &nbsp;
      {news.date.getDate()}/{news.date.getMonth()+1}/{news.date.getYear()}
    </span>
  </small>
  <p> {news.body} </p>
  </div>
)
