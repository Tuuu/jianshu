import styled from 'styled-components'

const HomeWrapper = styled.main`
  margin: 0 auto;
  padding-top: 30px;
  width: 960px;
  display: flex;
  justify-content: space-between;
`

const HomeLeft = styled.section`
  padding-left: 15px;
  width: 640px;
  .banner-img {
    width: 625px;
    display: block;
  }
`
const HomeRight = styled.section`
  width: 280px;
`

const TopicWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #f0f0f0;
`

const TopicItem = styled.div`
  margin-right: 18px;
  margin-bottom: 18px;
  flex-shrink: 0;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
  span {
    padding-right: 11px;
    padding-left: 11px;
    vertical-align: middle;
  }
`

const ListItem = styled.section`
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  & .list-info {
    margin-right: 15px;
  }
  & h2 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 18px;
    color: #333;
    font-weight: bold;
    line-height: 1.5;
  }
  & p {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  & .list-img {
    width: 150px;
    height: 100px;
    display: block;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`

export { HomeWrapper, HomeLeft, HomeRight, TopicWrapper, TopicItem, ListItem }
