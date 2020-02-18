import styled,{keyframes} from "styled-components";


const blue = `#357ae8`
export const ListingContainer = styled.div`
  display: grid;
  background-color: white;
  //previously was auto 40% 20%
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "results empty"
    "active sort"
  ;
  padding: 10px;
  margin-bottom: 20px;
  height:192px;
  //height: 144px;
  transition: all 3000ms ease ;
 `

const fadeKeyFrame = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`
export const Results = styled.div`
grid-area:results;
display: flex;
align-items:center;
.text{
  height:max-content;
  margin: 0 10px;
  padding: 0;
  color: ${blue};
  font-weight: bolder;
  animation:${fadeKeyFrame} 1s ease-in-out;
  }
transition: all 3000ms ease ;


`
export const ActiveFilters = styled.div`
  grid-area: active;
    //transition: all 3000ms ease ;
  


`
export const Sort = styled.div`
  grid-area:sort;
  //margin-left: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transition: all 3000ms ease ;

`
