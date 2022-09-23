import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export class News extends Component {
  
                               //articles yaa khali array jasto dekhiya pani hatauna hudaina. tala hami le array ko form ma pass gareko xamm so  
  constructor() {
    super();
    this.state = {
      articles:[],
     // loading : false,
      page:1 
    }
  }


  async componentDidMount() {
    let url =" https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=69c2f066fd1c4717803edfe9bc0c54d0&pageSize=12";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults });
  }

 handlePrevClick = async() => {
    console.log("previous ");
    let url =` https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=69c2f066fd1c4717803edfe9bc0c54d0&page=${this.state.page -1}&pageSize=12 `;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData); 
    
    this.setState({
      page:this.state.page -1,
      articles:parsedData.articles
    })
     
  }
  handleNextClick = async () => {             //   more of javascript xa. button next garda k kasari kaam vako xa vanni kura aauxa yesma. sajilai xa but jhukkini xa //
    console.log("next");
    if(this.state.page +1 > Math.ceil(this.state.totalResults/12)){

    }
    else{ 
        let url =`https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=69c2f066fd1c4717803edfe9bc0c54d0&page=${this.state.page +1}&pageSize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData); 
        
        this.setState({
          page:this.state.page +1,
          articles:parsedData.articles
        })
    }
  } 
 
 

  render() {
    return (
      <div className="container my-3">
        <h1>NewsUpdate - top headlines</h1>
        {this.state.loading &&<Spinner/>}

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                /> 
              </div>
            );
          })}
        </div>
       
            <div className="container d-flex justify-content-between my-4">
              <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; previous</button>           {/* always use "this."when u are working on a class based component . this. garea vane define nai hudaina. maathi function banako xa vanni nai thaha paudaina so always use "this."   */}
              <button type="button" className="btn btn-primary" onClick={this.handleNextClick}> next &rarr; </button>
            </div>
      </div>
    );
  }
}

export default News;
   