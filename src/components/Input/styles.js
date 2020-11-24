import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  background: #eee;  
  display: flex;
  height: auto;
  flex-direction: row;
  align-items: center;
  margin: ${props => props.header ? '35px 20px 10px 20px ' : '20px'};
  padding-left: 10px;
  border-radius: 4px;
`;

