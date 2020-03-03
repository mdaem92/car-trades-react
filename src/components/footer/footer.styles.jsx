import styled,{css} from 'styled-components'

const toggleHomepageView = props=>{
    if(props.isHomepage){

        return HomepageStyles
    }
    return SimpleStyles
}

export const FooterContainer = styled.div`

  ${toggleHomepageView};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
`
const SimpleStyles = css`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  color: whitesmoke;
  background-color: #357ae8;
  margin-top: 50px;
`

const HomepageStyles = css`
  //display: none;
  position: fixed;
 
  right: 0;
  bottom: 0;
  width: 70%;
  height: 100px;
  color: whitesmoke;
  background-color: #357ae8;
  margin-top: 50px;
  //border: 1px dashed white;

`

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100px;
  margin-right: 50px;
`


