import React, {useEffect,useState} from 'react';
import {Menu, Icon, Radio, Cascader, InputNumber, Button} from 'antd';
import {InventorySearchContainer,InputContainer,ButtonContainer} from './homepage-inventory-search.styles'
import InventoryFiltersMakeModel from "../inventory-filters-make-model/inventory-filters-make-model.component";


const HomepageInventorySearch = () => {
    const [state,setState] = useState({
        current:'make-model',
        priceFrom: null,
        priceTo:null,

    })
    useEffect(()=>{
        console.log(state)
    },[state])

    const handleClick = (e)=>{
        const {key}=e
        console.log(e)
        setState({current:key})
    }
    const onChange = (value,type)=>{
        console.log(value,type)
        setState({
            ...state,
            [type]:value
        })
    }
    const filter = (inputValue, path) =>{
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    return (
        <InventorySearchContainer>
            <InputContainer large>
                <InventoryFiltersMakeModel isHomepage/>
            </InputContainer>
            <InputContainer>
                <InputNumber
                    defaultValue={state.priceFrom}
                    placeholder={'From'}
                    className={'input'}
                    min={0}
                    max={100000}
                    step={500}
                    formatter={value => `$${value}`}
                    parser={value => value.replace('$', '')}
                    onChange={(value)=>onChange(value,'priceFrom')}
                />
            </InputContainer>
            <InputContainer>
                <InputNumber
                    defaultValue={state.priceTo}
                    className={'input'}
                    placeholder={'To'}
                    min={state.priceFrom+500}
                    max={100000}
                    step={500}
                    formatter={value => `$${value}`}
                    parser={value => value.replace('$', '')}
                    onChange={(value)=>onChange(value,'priceTo')}
                />
            </InputContainer>
            <ButtonContainer onClick={()=>console.log('clicking')}>
                Go
            </ButtonContainer>
        </InventorySearchContainer>
    );
};

export default HomepageInventorySearch;
