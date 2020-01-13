import React, {useState} from 'react'
import { Tag, Input, Icon } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import {TagsGroupContainer} from "./inventory-results-active-filters-group.styles";

const ActiveFiltersGroup =()=>{

    const[state,setState] = useState({
        tags: ['Mazda 3', 'Mileage: 10k-50k', 'Year:2018-19','Price:20k-50k','Diesel', 'Colors:White,Blue','Tag 7']
        // tags:[]
    })

    const handleClose = removedTag => {
        const tags = state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        setState({ tags });
    };

    const forMap = tag => {
        const tagElem = (
            <Tag className={'tag'}
                closable
                onClose={e => {
                    e.preventDefault();
                    handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
        );
    };
        const { tags } = state;
        const tagChild = tags.map(forMap);
        return (
            <div>
                <TagsGroupContainer>
                    {!!tags.length ? <span className={'label'}>Active filters</span>:<span className={'label'}> No active filters</span>}
                    <TweenOneGroup
                        enter={{
                            scale: 0.8,
                            opacity: 0,
                            type: 'from',
                            duration: 100,
                            onComplete: e => {
                                e.target.style = '';
                            },
                        }}
                        leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                        appear={false}
                    >
                        {tagChild}
                    </TweenOneGroup>
                </TagsGroupContainer>
            </div>
        );

}
export default ActiveFiltersGroup
