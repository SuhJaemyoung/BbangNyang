import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import modalState from '@store/modal';
import Title from '@atoms/BbangNyangTitle';
import BakeryDoor from '@atoms/BakeryDoor';
import BakeryBackground from '@atoms/BakeryImage';
import EntryCodeModal from '@molecules/EntryCodeModal';

const Container = styled.div`
  position: absolute;
  margin-left: 30px;
  margin-bottom: 450px;
`;

const Bakery: React.FC = () => {
  const modal = useRecoilValue(modalState);

  return (
    <>
      <BakeryBackground />
      <BakeryDoor />
      <Container>
        <Title />
      </Container>
      {modal === 'EntryCode' && <EntryCodeModal />}
    </>
  );
};

export default Bakery;
