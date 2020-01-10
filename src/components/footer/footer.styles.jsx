import styled,{css} from 'styled-components'

const toggleHomepageView = props=>{
    if(props.isHomepage){

        return HomepageStyles
    }
    return SimpleStyles
}

export const FooterContainer = styled.div`

  ${toggleHomepageView}
`
const SimpleStyles = css`
  //position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  color: whitesmoke;
  background-color: #357ae8;
  margin-top: 50px;
  //margin-bottom: 20px;
`

const HomepageStyles = css`

  position: fixed;
 
  right: 0;
  bottom: 0;
  width: 70%;
  height: 100px;
  color: whitesmoke;
  background-color: #357ae8;
  margin-top: 50px;

`

