import React from 'react';

export class PictureGallary extends React.Component{
  render(){
    try{
      //console.log(this.props.picture_list.results);
      var picture_list = this.props.picture_list.results.map(function(obj, index){
        return <img src={obj.picture.large} key={index} />
      });
    }
    catch(e){

    }
    return (
      <div>
        <h1>Picture Gallary</h1>
        {picture_list}
      </div>
    )
  }
}

PictureGallary.defaultProps = {
  picture_list:[]
}
