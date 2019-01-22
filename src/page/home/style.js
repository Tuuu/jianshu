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

export { HomeWrapper, HomeLeft, HomeRight, TopicWrapper, TopicItem }
