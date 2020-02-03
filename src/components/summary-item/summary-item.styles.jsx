import styled,{css} from 'styled-components'


export const SummaryItemContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  background-color: white;
  ${props=>props.isExtended && css`
    flex-direction: row;
    border-top: 1px solid #f7f7f7f7;
    height: 50px;
    
  `}
  
    
  }
`

export const ImageContainer = styled.div`
  
 .summary-icon{
      width: 30px;
      height: 30px;
      display: block;
      margin: auto;
      padding-top: 5px;
      ${props=>props.isExtended && css`

        width: 30px;
        height: 100%;
        padding-top: 0;
        justify-content: flex-start;
        margin:0;
        
      `}
    } 
    
`
export const TitleContainer = styled.h3`
   text-align: center;
   font-size: 12px;
   margin-top: 5px;
   ${props=>props.isExtended && css`
       font-size: 14px;
       //font-weight: bold;
       margin: 25px 10px 25px 50px;
       justify-content: flex-end;
       
   `}
   
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;

`
export const DescriptionContainer = styled.h3`
  color: grey;
  font-size: 12px;
  text-align: center;
  margin:25px 10px ;
  justify-content: flex-start;
  
  
`