import React, { useState, useEffect } from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  RestaurantList,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  Star,
  Categories,
  Distance,
  Delay,
} from './styles';

import api from '../../services/api';

export default function Restaurants({ title, display }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('restaurants');

      setRestaurants(response.data);
    }
    loadRestaurants();
  }, []);

  return (
    <Container>
     
    </Container>
  );
}
