import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Produto from '../pages/Produto';
import Comentarios from '../pages/Comentarios';

const Tab = createMaterialBottomTabNavigator();

export default function Tabs(props) {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Produto"         
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='information-circle' size={26} color={color} />         
          }}>            
          {() => <Produto idProduto={props.route.params.idProduto} />}
        </Tab.Screen>
        <Tab.Screen name="Comentarios"
          options={{
              tabBarIcon: ({ color, size }) => <Ionicons name='chatbubble-ellipses' size={26} color={color} />                          
          }}>            
          {() => <Comentarios idProduto={props.route.params.idProduto} />
          }
        </Tab.Screen>   
    </Tab.Navigator>
  );
}


