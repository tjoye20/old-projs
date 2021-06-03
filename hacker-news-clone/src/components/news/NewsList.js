import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';

class NewsList extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderList() {
    //title, url, urlToImage, author, description, publishedAt
    return this.props.news.map((newsArticle, index) => {
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
            <p>
              {newsArticle.description}
            </p>
            <p>
              {newsArticle.publishedAt}
            </p>
          </div>
        </div>
      )
    }) 
  }

  render() {
    return(
      <div className='col-sm-9'>{this.renderList()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

export default connect(
  mapStateToProps, { 
  fetchNews }
)(NewsList);

