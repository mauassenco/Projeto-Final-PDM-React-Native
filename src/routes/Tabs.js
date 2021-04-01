import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Produto from '../pages/Produto';
import Comentarios from '../pages/Comentarios';

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Produto" component={Produto} 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='information-circle' size={26} color={color} />         
          }} 
        />
        <Tab.Screen name="Comentarios" component={Comentarios} 
          options={{
              tabBarIcon: ({ color, size }) => <Ionicons name='chatbubble-ellipses' size={26} color={color}  />                  
          }}  
        />    
    </Tab.Navigator>
  );
}
