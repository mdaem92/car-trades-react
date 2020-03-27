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
  /* margin-top:auto */
`
const SimpleStyles = css`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  color: whitesmoke;
  background-color: #357ae8;
  /* margin-top: 50px; */
  display:flex;
  justify-content:flex-end;
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
  @media screen and (max-width:800px){
    width:100%;
    height:60px;
  }

`

export const SocialsContainer = styled.div`

  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  width:100px;
  margin-right:20px;
  .icon{
    &:hover{
      svg{
        width:17px;
        height:17px;
      }
      
    }
  }
  @media screen and (max-width:800px){
    margin-right:10px;
  }
`


