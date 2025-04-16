import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import ModalImage from './imgs/modal.avif';
import { Link } from 'react-router-dom';
const StyledModal = styled(Modal)`
    width: 40vw;
    height: 60vh;
    border-radius:12px;
    background-image: ${(porps) => porps.src && `url(${porps.src})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
.ant-modal-content{
    background-color: rgba(0,0,0,0);
}
`;
const eventPID = '123';

const PopupModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        const PopupHistory = JSON.parse(localStorage.getItem('shoopee:popup.history'))
        const now = Date.now();
        if (PopupHistory && now - PopupHistory.time < 3 * 1000) {
            setIsModalOpen(false);
        } else {
            const history = {
                time: now,
                PID: eventPID,
            }
            localStorage.setItem('shoopee:popup.history', JSON.stringify(history))
            setIsModalOpen(true)
        }
    }, [])
    return (<>
        {isModalOpen && (
            <StyledModal
                open
                title={null}
                centered={true}
                footer={null}
                onCancel={handleCancel}
                src={ModalImage}
            >
                <Link to={`/${eventPID}`}>
                    <div style={{ width: '40vw', height: '60vh', padding: 0 }}>

                    </div>
                </Link>
            </StyledModal>)}
    </>);
};
export default PopupModal;