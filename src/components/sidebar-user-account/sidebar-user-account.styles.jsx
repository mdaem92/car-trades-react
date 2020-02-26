import styled from 'styled-components'

const blue = `#357ae8`
export const SidebarAccountContainer = styled.div`
    height:263px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    .username{
        color:white;
        font-weight:bold;
    }
`

export const UserImageContainer = styled.div`

    border:3px solid white;
    width:120px;
    height:120px;
    border-radius:50%;
    background-image:${({imageUrl})=>`url(${imageUrl})`};
    background-size: cover;
    background-position: center;
    
    /* margin-top:50px; */

`

