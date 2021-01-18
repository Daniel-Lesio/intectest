import React from 'react';
import styled from 'styled-components';
import {notificationAtom} from '../../atoms/atoms'
import { useRecoilValue ,useRecoilState} from 'recoil'
const Notify = () => {
    const [text, setText] = useRecoilState(notificationAtom);

    return (
        <Notification>
            {text}
        </Notification>
    );
}

export default Notify;


const Notification = styled.div`
    position: fixed;
    bottom : 0;
    transform:  translateX(-50%);
    left:  50%;
    min-height: 60px;
    padding: 10px;
    max-width:  300px;
    width:  100%;
    border: solid 2px orange;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
`;