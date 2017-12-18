import React from 'react';
import Calendar from 'react-icons/lib/fa/calendar';
import User from 'react-icons/lib/fa/user';
import Copyright from 'react-icons/lib/fa/copyright';
import { Link } from 'react-router-dom';

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
  <Link to = {`/news/${news.id}`}>
  <h3 className="news-title">{news.news_title} </h3>
  </Link>
  <small>
  Author: <span className = {isAdmin(news.news_author)}> <Copyright/> {news.news_author} </span>
  &nbsp;Publisher: <span className = {isAdmin(news.news_publisher)}> <User/> {news.news_publisher} </span>
  <span className="right">
  <Calendar /> &nbsp;
  { news.news_date ? news.news_date.toString(): ""}
  {/*{news.news_date.getDate()}/{news.news_date.getMonth()+1}/{news.news_date.getYear()} */}
  </span>
  </small>
  <p> {news.news_body} </p>
  </div>
)
