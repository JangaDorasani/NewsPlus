import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
      pageSize: 12,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-News`;
  }
  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  handlePrevClick = async () => {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&&page=${
      this.state.page - 1
    }&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
    this.props.setProgress(100)
  };

  handleNextClick = async () => {
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.pageSize)) {
    //   return; // No need to do anything if already on the last page
    // }
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&&page=${
      this.state.page + 1
    }&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
    this.props.setProgress(100)
  };

  render() {
    return (
      <div className="container pt-5">
        <h1 className="text-center mb-4 ">News TOP {this.capitalizeFirstLetter(this.props.category)} HeadLines</h1>
        {this.state.loading && <Spinner />}     
        <div className="row ">
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              return  <div className="col-md-4 my-3" key={ele.url}>
                  <Newsitem
                    title={ele.title ? ele.title.slice(0, 45) : " "}
                    desc={ele.content ? ele.content.slice(0, 80) : " "}
                    ImageUrl={
                      !ele.urlToImage
                        ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
                        : ele.urlToImage
                    }
                    NewsUrl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
                
            })
          } ; 
          </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}  
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
        </div>
       
      
    );
  }
}

export default News;
