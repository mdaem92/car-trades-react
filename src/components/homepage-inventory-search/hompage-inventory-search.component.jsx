import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { InventorySearchContainer, InputContainer, ButtonContainer } from './homepage-inventory-search.styles'
import InventoryFiltersMakeModel from "../inventory-filters-make-model/inventory-filters-make-model.component";
import { withRouter } from "react-router-dom";


const HomepageInventorySearch = ({ history }) => {
    const [state, setState] = useState({
        current: 'make-model',
        priceFrom: 0,
        priceTo: 0,

    })
    useEffect(() => {
        console.log(state)
    }, [state])

    const onChange = (e) => {
        const { value, name } = e.target
        if (value) {
            return setState({
                ...state,
                [name]: parseInt(value)
            })
        }
        return setState({
            ...state,
            [name]: undefined
        })
    }
    // const onFocus = (e) => {
    //     console.log('focusing', e)
    // }
    // const onBlur = (e) => {
    //     console.log('bluring', e)
    // }

    // const filter = (inputValue, path) =>{
    //     return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    // }
    return (
        <InventorySearchContainer>
            <InputContainer large>
                <InventoryFiltersMakeModel isHomepage />
            </InputContainer>
            <div className={'mobile-group'}>
                <InputContainer>

                    <Input
                        placeholder={'Min Price'}
                        className={'input'}
                        type={'number'}
                        name={'priceFrom'}
                        prefix={'$'}
                        min={0}
                        max={state.priceTo ? state.priceTo - 500 : 100000}
                        step={500}
                        onChange={onChange}
                        // onBlur={onBlur}
                        // onFocus={onFocus}
                    />
                </InputContainer>
                <InputContainer>
                    {console.log('type of priceFrom', typeof state.priceFrom)}
                    <Input
                        type={'number'}
                        prefix={'$'}
                        name={'priceTo'}
                        className={'input'}
                        placeholder={'Max Price'}
                        min={state.priceFrom ? state.priceFrom + 500 : 500}
                        max={100000}
                        step={500}
                        onChange={onChange}
                        // onFocus={onFocus}
                        // onBlur={onBlur}
                    />
                </InputContainer>
            </div>

            <ButtonContainer onClick={() => history.push('/inventory')}>
                Go
            </ButtonContainer>
        </InventorySearchContainer>
    );
};

export default withRouter(HomepageInventorySearch);
