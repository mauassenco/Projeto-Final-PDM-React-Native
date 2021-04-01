import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Produtos from './pages/Produtos';
// import Produto from './pages/Produto';
// import Comentarios from './pages/Comentarios';
import Tabs from './routes/Tabs';

export default function MyStack() {
  return (
      <Stack.Navigator 
      screenOptions={{headerStyle: {backgroundColor:'rgb(0, 122, 255)'},headerTintColor:'#fff'}}>
          <Stack.Screen name="Produtos" component={Produtos} 
              options={{ title:'Produtos'}, {headerTitleAlign: 'center'}}/>
          <Stack.Screen name="Produto" component={Tabs} 
              options={{ title:'Produto'}, {headerTitleAlign: 'center'}} />    
      </Stack.Navigator>
  );
}