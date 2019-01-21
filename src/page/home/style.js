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

export { HomeWrapper, HomeLeft, HomeRight }
