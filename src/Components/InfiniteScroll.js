import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class InfiniteScroll extends Component {
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
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
      pageSize: 12,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-News`;
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5cd5f6f3125240f2864b9f18f70f9f2e&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.fetchNews();
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center my-4">
          News TOP {this.capitalizeFirstLetter(this.props.category)} HeadLines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row my-4">
            {this.state.articles.map((ele) => (
              <div className="col-md-4 my-3" key={ele.url}>
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
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
