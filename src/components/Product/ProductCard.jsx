import React, { useState } from 'react';
import { Button, Card, Modal, Rate } from 'antd';

const { Meta } = Card;

const ProductCard = ({ title, price, description, category, image, rating }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Card
                hoverable
                onClick={showModal}
                style={{ width: 400, height: 'auto', margin: '16px' }}
                cover={
                    <img
                        alt={title}
                        src={image}
                        style={{
                            height: '200px', // Fixed height
                            objectFit: 'contain', // Maintain aspect ratio
                            width: '100%' // Full width
                        }}
                    />
                }
            >
                <Meta title={title} description={category} />
                <div style={{ margin: '8px 0' }}>
                    <Rate allowHalf disabled value={rating.rate} />
                    <span style={{ marginLeft: 8 }}>({rating.count} reviews)</span>
                </div>
                <div style={{ fontWeight: 'bold' }}>${price}</div>
                <p>{description}</p>
            </Card>

            <Modal
                onOk={handleOk}
                onCancel={handleOk}
                footer={[
                    <Button type="primary" onClick={handleOk}>
                        Close
                    </Button>
                ]}
            >
                <div className="product-details">
                    <img src={image} alt={title} style={{ width: '100%', marginBottom: '16px' }} />
                    <h2 className='font-bold mb-3'>{title}</h2>
                    <div style={{ margin: '8px 0' }}>
                        <Rate allowHalf disabled value={rating.rate} />
                        <span style={{ marginLeft: 8 }}>({rating.count} reviews)</span>
                    </div>
                    <p>{description}</p>
                    <p className='mt-3 text-[18px]'><strong>${price}</strong> </p>
                </div>
            </Modal>
        </>
    );
};

export default ProductCard;
