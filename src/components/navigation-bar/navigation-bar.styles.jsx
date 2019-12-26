import styled from 'styled-components'

const offGrey = '#fcfcfc'
const borderColor = '#00000020'
export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
 
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 10px;
  background-color: white;
   border-top: 2px solid ${offGrey};
  
  
`
export const TitleContainer = styled.span`
  font-size: 30px;
  color: #58575f;
  font-weight: bold;
  //font-weight: bolder;
  display: flex;
  justify-content: flex-start;
  margin-left: 50px;
  padding: 10px 10px;
  //@media screen and (max-width: 800px){
  //  display: none;
  //}
`

