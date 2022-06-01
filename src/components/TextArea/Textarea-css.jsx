import styled from "styled-components";

const TextareaBox = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.box};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 250px;
  background: none;
  resize: none;
  border: none;
  outline: none;
  color: inherit;
  padding: 20px;
  font-size: 20px;

  &::placeholder {
    color: inherit;
    opacity: 0.7;
  }
`;

const TextareaFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.first ? "space-between" : "end")};
  padding: 10px 15px;
  border-top: 1px solid rgba(75, 75, 75, 0.2);
  user-select: none;
`;

const TextareaIconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`;

const TextareaIcon = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 25px;
  background: linear-gradient(
    60deg,
    rgba(58, 171, 249, 1) 0%,
    rgba(71, 152, 254, 1) 65%
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 10px;

  &:hover {
    opacity: 0.8;
  }
`;

const CopyText = styled.span`
  position: absolute;
  top: -50px;
  right: -15px;
  padding: 5px 10px;
  color: #fff;
  border-radius: 5px;
  background: linear-gradient(
    60deg,
    rgba(58, 171, 249, 1) 0%,
    rgba(71, 152, 254, 1) 65%
  );
  box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 15px;
`;

const TranslateButton = styled.button`
  width: 150px;
  height: 45px;
  background: linear-gradient(
    60deg,
    rgba(249, 58, 58, 1) 0%,
    rgba(254, 71, 71, 1) 65%
  );
  border-radius: 10px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 15px;

  &:hover {
    opacity: 0.8;
  }
`;

export {
  TextareaBox,
  Textarea,
  TextareaFooter,
  TextareaIconBox,
  TextareaIcon,
  TranslateButton,
  CopyText
};
