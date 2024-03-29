import styled,{keyframes} from 'styled-components'


const blue ='#357ae8';
const offGrey = '#f7f7f7'
const grey = '#7f7f7f'
export const TableVerticalHeader = styled.div`
    display:grid;
    grid-template-rows:3fr 4fr;
    padding:10px;
   

`
const fadeKeyFrame = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const MobileHeader = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const HeaderLabel = styled.div`
    /* background:${({imageUrl})=>`url(${imageUrl})`} */
    grid-column:1/span 1;
    grid-row:1/span 1;
    display:flex;
    color:${blue};
    font-size:30px;
    font-weight:bold;
    justify-content:center;
    align-items:center;
    height:160px;
    width:250px;
    animation:${fadeKeyFrame} 1s ease-in-out;
    
`

export const HeaderColumns=styled.div`
    /* background-color:${offGrey}; */
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    .column-item{
        text-align:start;
        border-bottom:1px solid ${offGrey};
        padding-left:5px;
        font-size:15px;
        color:${grey};
    }
    
`