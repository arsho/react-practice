import React from 'react';
import Calendar from 'react-icons/lib/fa/calendar';
import User from 'react-icons/lib/fa/user';
import Copyright from 'react-icons/lib/fa/copyright';
import { PageTitle } from './HeaderComponent';


const isAdmin = (author) => {
  if(author === 'BBC'){
    return "active";
  }
  else{
    return "not_active";
  }
}
export class NewsDetail extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      news_detail: {
      },
    }
  }

  componentDidMount(){
    const { match: { params } } = this.props;
    var url = "http://127.0.0.1:8000/api/news/"+params.id+".json";
    fetch(url)
    .then(response => {
      if(response.status >= 500){
        throw new Error("Bad response from server");
      }
      else if(response.status >= 400){
        throw new Error("Bad request format");
      }
      return response.json()
    })
    .then(data => {
      this.setState({news_detail: data});
    })
  }

    render(){
      return (
        <div className="news">

        <PageTitle page_title={this.state.news_detail.id +" - "+ this.state.news_detail.news_title} />

        <small>
        Author: <span className = {isAdmin(this.state.news_detail.news_author)}> <Copyright/> {this.state.news_detail.news_author} </span>
        &nbsp;Publisher: <span className = {isAdmin(this.state.news_detail.news_publisher)}> <User/> {this.state.news_detail.news_publisher} </span>
        <span className="right">
        <Calendar /> &nbsp;
        { this.state.news_detail.news_date ? this.state.news_detail.news_date.toString(): ""}
        {/*{news.news_date.getDate()}/{news.news_date.getMonth()+1}/{news.news_date.getYear()} */}
        </span>
        </small>
        <p> {this.state.news_detail.news_body} </p>
        </div>
      )
    }
  }
