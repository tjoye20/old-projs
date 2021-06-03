import React from 'react';
import { connect } from 'react-redux';
import { fetchTopNews } from '../../actions';

class TopNewsList extends React.Component {
  componentDidMount() {
    this.props.fetchTopNews();
  }

  renderList() {
    //title, url, urlToImage, author, description, publishedAt
    return this.props.topNews.map((newsArticle, index) => {
      //it creates this HTML for every stream
      return(
        <div key={index}>
          <div className='col-sm-2'>
            <a href={newsArticle.url} target='_blank' without='"true' rel="noopener noreferrer">
              <img alt='' className="ui small image" height='60' src={newsArticle.urlToImage}/>
            </a>
          </div>
          <div className='col-sm-10'>
            <h5>
              <a href={newsArticle.url} target='_blank' without="true" rel="noopener noreferrer">
                {newsArticle.title}
              </a>
            </h5>
          </div>
        </div>
      )
    }) 
  }

  render() {
    return(
      <div className='col-sm-3'>{this.renderList()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topNews: state.topNews
  }
}

export default connect(
  mapStateToProps, { 
  fetchTopNews }
)(TopNewsList);

