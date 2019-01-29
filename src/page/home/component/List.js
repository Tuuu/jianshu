// 主页
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListItem, MoreButton } from '../style'
import { actionCreator } from '../store'
class List extends Component {
  render () {
    return (
      <section>
        {this.props.articleList.map(item => (
          <ListItem key={item.id}>
            <div className="list-info">
              <h2 className="list-title">{item.title}</h2>
              <p className="list-content">{item.content}</p>
            </div>
            <img className="list-img" src={item.imgUrl} alt="" />
          </ListItem>
        ))}
        <MoreButton disabled={this.props.isLoading} onClick={() => this.props.getMoreArticleList(this.props.pageNum)}>
          加载更多
        </MoreButton>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleList: state.getIn(['home', 'articleList']).toJS(),
    pageNum: state.getIn(['home', 'pageNum']),
    isLoading: state.getIn(['home', 'isLoading']),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoreArticleList: pageNum => {
      const action = actionCreator.getArticleList(pageNum)
      dispatch(action)
    },
  }
}

List.propTypes = {
  articleList: PropTypes.array,
  getMoreArticleList: PropTypes.func,
  isLoading: PropTypes.bool,
  pageNum: PropTypes.number,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
