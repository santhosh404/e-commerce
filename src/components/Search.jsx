import React, { useContext, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, message, Select } from 'antd';
import { ProductContext } from '../context/productContext';
import { productFilter } from '../service/productService';

const Search = ({ isMobile }) => {

    const { setProduct, setLoading } = useContext(ProductContext);
    const [filter, setFilter] = useState({
        title: '',
        category: ''
    });

    const handleSearch = async () => {
        const keyword = event.target.value;
        setFilter(prev => ({ ...prev, keyword: keyword }));
        try {
            setLoading(true);
            const response = await productFilter(keyword, filter.category);
            setProduct(response.data.product);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
            message.error(err.message);
        }
    }

    const onChange = async (value) => {
        setFilter(prev => ({ ...prev, category: value }));
        try {
            setLoading(true);
            const response = await productFilter(filter.title, value);
            setProduct(response.data.product);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
            message.error(err.message);
        }
    }

    return (
        <div className={`text-white lg:flex-grow items-center gap-5 justify-center ${!isMobile && 'hidden lg:flex'} ${isMobile ? 'mt-10 px-10': 'px-20'}`}>
            <Select
                showSearch
                size='large'
                style={{ width: isMobile ? '100%' : 280, marginBottom: isMobile && '20px'}}
                placeholder="Select a category"
                optionFilterProp="label"
                onChange={onChange}
                // onSearch={onSearch}
                options={[
                    {
                        value: 'all',
                        label: 'All',
                    },
                    {
                        value: 'electronics',
                        label: 'Electronics',
                    },
                    {
                        value: 'clothing',
                        label: 'Clothing',
                    },
                    {
                        value: 'home appliances',
                        label: 'Home Appliances',
                    },
                ]}
            />
            <Input
                placeholder="Search..."
                size="large"
                allowClear
                className='w-full'
                onChange={handleSearch}
                prefix={
                    <SearchOutlined
                        style={{
                            color: 'rgba(0,0,0,.25)',
                        }}
                    />
                }
            />
        </div>
    )
}

export default Search