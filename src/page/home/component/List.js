// 主页
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListItem } from '../style'
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
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleList: state.getIn(['home', 'articleList']).toJS(),
  }
}

List.propTypes = {
  articleList: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(List)
