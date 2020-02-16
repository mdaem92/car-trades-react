import React,{useState} from 'react'
import {Tag} from 'antd'
const InventoryActiveFilter = ()=>{

    const [state,setState]  = useState()
    return(
        <Tag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag>
    )
}
export default InventoryActiveFilter
