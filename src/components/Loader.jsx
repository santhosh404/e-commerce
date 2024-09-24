import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loader = () => {
    return (
        <Spin indicator={<LoadingOutlined spin />} />
    );
};

export default Loader;
