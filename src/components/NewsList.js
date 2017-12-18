import React from 'react';
import { NewsRow } from './NewsRow';

export const NewsList = ({news_list}) => (
 <div className="news-wrapper">
    {
      news_list.map((news, index) =>
        <NewsRow news = {news}
                 key = {index}/>
      )
    }
  </div>
)

NewsList.propTypes = {
  news_list: function(props){
    if(Array.isArray(props.news_list) === false){
      return new Error("News List should be an array");
    }
    else if(props.news_list.length === 0){
      return new Error("You should provide at least a news");
    }
    else{
      return null;
    }
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

// import PropTypes from 'prop-types';
