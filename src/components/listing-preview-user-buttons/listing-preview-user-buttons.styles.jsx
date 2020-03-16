import styled,{css} from 'styled-components'


const iconStyles = css`
  width:20px;
   height: auto;
   margin: 0 5px;
   &:hover{
     width: 22px;
     /* transition: width 100ms ease-in-out; */
   }
`
export const ButtonsContainer = styled.div`
  display: flex;
  height: 22px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  .compare-icon {
    width: 20px;
    ${iconStyles};
    path{
    ${props => props.isCompared && css`
      fill: red !important;
    `}
    }
    
  }
  .parking-icon{
    ${iconStyles};
    path{
       ${props => props.isParked && css`
        fill: red !important;
    `}
    }
   
  }
  @media screen and (max-width:800px){
    justify-content:flex-end;
    margin-top:5px;
    .compare-icon{
      path{
        ${props => props.isCompared ? css`
          fill: red !important;
        `
        :
        css`
          fill:white !important;
        `
    
        }
      }
    }
    .parking-icon{
      path{
        ${props => props.isParked ? css`
          fill: red !important;
        `
        :
        css`
          fill:white !important;
        `
    
        }
      }
    }


  }
    
    

`
