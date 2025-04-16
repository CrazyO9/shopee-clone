import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import ModalImage from './imgs/modal.avif';
import { Link } from 'react-router-dom';
const StyledModal = styled(Modal)`
    width: 40vw;
    height: 60vh;
    border-radius:12px;
    background-image: ${({ src }) => src ? `url(${src})` : 'none'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
.ant-modal-content{
    background-color: rgba(0,0,0,0);
}
`;
const ModalContent = styled.div`
  width: 40vw;
  height: 60vh;
  padding: 0;
`;

const eventPID = '123';

const PopupModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const HistoryKey = 'shoopee:popup.history';
    const handleCancel = () => {
        const now = Date.now();
        setIsModalOpen(false);
        const history = {
            time: now,
            PID: eventPID,
        }
        localStorage.setItem(HistoryKey, JSON.stringify(history))
    }
    useEffect(() => {
        const PopupHistory = JSON.parse(localStorage.getItem(HistoryKey))
        const now = Date.now();
        if (PopupHistory && now - PopupHistory.time < 3 * 1000) {
            setIsModalOpen(false);
        } else {
            setIsModalOpen(true)

        }
    }, [])
    return (isModalOpen && (
        <StyledModal
            open={isModalOpen}
            title={null}
            centered
            footer={null}
            onCancel={handleCancel}
            src={ModalImage}
        >
            <Link to={`/${eventPID}`}>
                <ModalContent style={{ width: '40vw', height: '60vh', padding: 0 }}>

                </ModalContent>
            </Link>
        </StyledModal>
    ));
};
export default PopupModal;