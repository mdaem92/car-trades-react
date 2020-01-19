import styled,{css} from 'styled-components'

export const GroupContainer = styled.div`
  .item{
    margin: 5px 30px ;
    //display: none;
    ${props => props.isHomepage && css`
      margin: unset;
      width: 300px;
    
    `}
  }

`
