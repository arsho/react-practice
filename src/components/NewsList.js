import React from 'react';
import { NewsRow } from './NewsRow';
import PropTypes from 'prop-types';

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
