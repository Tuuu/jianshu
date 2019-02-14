import styled from 'styled-components'

export const DetailWrapper = styled.main`
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 100px;
  width: 620px;
`

export const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 34px;
  line-height: 1.3;
  color: #333;
  font-weight: 700;
  word-break: break-word;
`

export const Content = styled.div`
  color: #2f2f2f;
  word-break: break-word;
  & img {
    margin-bottom: 25px;
    width: 100%;
    display: block;
  }
  & p{
    margin-top: 0;
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 1.7;
  }
`
