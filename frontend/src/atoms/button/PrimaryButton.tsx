import { FC, ReactNode } from "react";
import styled from "styled-components";

type PrimaryButtonType = {
  backgroundColor: string
  children: ReactNode
}

export const PrimaryButton: FC<PrimaryButtonType> = (props) => {
  const {backgroundColor, children} = props;
  return (
    <SButton backgroundColor={backgroundColor}>{children}</SButton>
  )
}

const SButton = styled.button<PrimaryButtonType>`
  ${({ backgroundColor }) => `background: ${backgroundColor}`};
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;