import { useState } from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: #2f93f7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 200px;
  height: 100px;
  border-radius: 1rem;
  background-color: white;
  > .close-btn {
    position: absolute;
    top: 10px;
    cursor: pointer;
  }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      <ModalBtn onClick={openModalHandler}>Click Here</ModalBtn>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView>
            <div className="close-btn">&times;</div>
            <h1>Modal</h1>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};
