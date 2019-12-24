import React from 'react'

const UserAccountPage = ({match:{params:{userName}}})=>{
    return (
        <div className='user-account-page'>
            Hi {userName}
        </div>
    )
}
export default UserAccountPage