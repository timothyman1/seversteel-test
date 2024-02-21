import styled from 'styled-components';

import { v } from '@/styles/variable.style';

const Table = styled.table`
  table-layout: inherit;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: ${v.borderRadius};
  overflow: hidden;
  box-shadow: ${v.boxShadow};
`;

const Thead = styled.thead`
  position: sticky;
  z-index: 100;
`;
const THeadTR = styled.tr`
  background: ${({ theme }) => theme.bg};
`;
const TH = styled.th`
  font-weight: normal;
  padding: ${v.smSpacing};
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
`;
const Tbody = styled.tbody``;
const TBodyTR = styled.tr`
  background: ${({ theme }) => theme.white};
`;

const TD = styled.td`
  padding: ${v.smSpacing};
  border: 1px solid ${({ theme }) => theme.white};
  font-size: 14px;
`;
const TDEmpty = styled(TD)`
  width: 90px;
  height: 48px;
`;

const THBalance = styled(TH)`
  &:hover {
    cursor: pointer;
  }
  background: ${({ theme }) => theme.bg3};
`;

const Button = styled.button`
  padding: 0px;
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-weight: 100;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const H1 = styled.h1`
  text-align: center;
`;

export const S = {
  Table,
  Thead,
  THeadTR,
  TH,
  Tbody,
  TBodyTR,
  TD,
  Button,
  THBalance,
  TDEmpty,
  H1,
};
