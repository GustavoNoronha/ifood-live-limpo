import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';

import { PromoList, Item, PromoImage } from './styles';

import api from '../../services/api';

function Promotions({ navigation }) {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    async function loadPromotions() {
      const response = await api.get('promotions');
      setPromotions(response.data);
    }
    loadPromotions();
  }, []);

  return (
    <PromoList horizontal>
      
     
    </PromoList>
  );
}

export default withNavigation(Promotions);
