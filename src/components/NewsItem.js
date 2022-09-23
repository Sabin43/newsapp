import React, { Component } from 'react'

export  class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    //utta banako array junn ma hamro display huni news haru xann , tini haru lai pass garna lai props use garekoo ho. 
    return (
  
    <div className="my-3" >
      <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-primary">Read More</a>
            {/* imageUrl,title, description,newsUrl hamro array ma vako item haru lai reffer garna lai banako ho  */}
          </div>
        </div>
    </div>
    
      
    )
  }
}
export default  NewsItem
  