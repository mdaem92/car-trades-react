import React, {useState} from 'react';
import {
    Row,
    Col,
    Radio,
    Select,
    Slider,
    InputNumber
} from 'antd'
const {Option} = Select

const AddListingFormSpecs = () => {
    const [state,setState] = useState({
        fuelEconomy:30,
        fuelType:undefined,
        engineCapacity:undefined,
        enginePower:undefined
    })

    const onChange = (e,selectData)=>{

        if(e.target){
            const{name,value} = e.target
            console.log(`{${name},${value}} = ${e.target}`)
            setState({
                ...state,
                [name]:value,
            })
        }else{
            const {name} = selectData.props
            console.log(`{${selectData.props.name}} = ${e}`)
            setState({
                ...state,
                [name]:e,
            })
        }
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    const onInputChange = (a,b)=>{
        console.log(a,b)
    }
    return (
        <>
            <Row>
                <Col span={8}>
                    fuel economy:
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}

                    >
                        {
                            [...Array(100).keys()]
                                .map((i)=><Option name={'fuelEconomy'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>

                </Col>
                <Col span={8}>
                    fuel type:
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    engine capacity
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>
                <Col span={8}>
                    Engine power
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>
                <Col span={8}>
                    transmission
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>

            </Row>

        </>
    );
};

export default AddListingFormSpecs;