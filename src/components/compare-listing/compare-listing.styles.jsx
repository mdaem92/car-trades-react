import styled,{css} from 'styled-components'


const iconStyles = css`
    opacity:0;
    position:relative;
    top:92px;
    left:117px;
    z-index:998; 
    svg{
        height:25px;
        width:auto;
        fill:white;
    }
    &:hover{
        svg{
            fill:red;
        }
    }
    transition:opacity 300ms ease-in-out;
`
export const CompareListingContainer = styled.div`

    position:relative;
    display:grid;
    grid-template-rows:3fr 4fr;
    margin:0 10px;
    height:400px;
    .anticon-close{
        /* display:none; */
        ${iconStyles}
    }
    &:hover{
        .anticon{
            opacity:0.8;
        }
    }

   
`

const blue ='#357ae8';
const offGrey = '#f7f7f7'
const grey = '#7f7f7f'


export const Columns=styled.div`
    /* background-color:${offGrey}; */
    /* margin-top:12px; */
    display:flex;
    flex-direction:column;
    justify-content:space-around;

    .column-item{
        text-align:center;
        border-bottom:1px solid ${offGrey};
        padding-left:5px;
        font-size:15px;
        color:${blue};
        height:fit-content;
    }
`

export const EmptyImageContainer = styled.div`
    height:160px;
    width:250px;
    text-align:center;
    /* background-color:grey; */
    border:1px dashed ${blue};
    
    .anticon-plus{
        ${iconStyles};
        /* position:absolute; */
        height:30px;
        top:70px;
        left:5px;
        opacity:1;
        width:auto;
        svg{
            fill:${grey};
        }
        &:hover{
            svg{
                fill:limegreen;
            }
        }
    }
`