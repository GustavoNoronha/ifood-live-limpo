import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';

import { formatNumber } from '../../utils/formatNumber';

import {
  Container,
  Header,
  Info,
  Title,
  SubTitle,
  SeeMoreButton,
  SeeMoreText,
  OfferList,
  ItemInfo,
  Item,
  ItemImage,
  ItemTitle,
  ItemPrice,
  OldPrice,
  Price,
} from './styles';

function Offers({ navigation }) {
  
  return (
    <Container>
      
    </Container>
  );
}

export default withNavigation(Offers);
