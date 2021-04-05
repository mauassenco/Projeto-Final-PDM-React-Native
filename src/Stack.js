import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

import Produtos from './pages/Produtos';
// import Produto from './pages/Produto';
// import Comentarios from './pages/Comentarios';
import Tabs from './routes/Tabs';
import Cadastrar from './pages/Cadastrar';

export default function MyStack() {
  return (
      <Stack.Navigator 
      screenOptions={{headerStyle: {backgroundColor:'rgb(0, 122, 255)'},headerTintColor:'#fff'}}>
          <Stack.Screen 
            name="Produtos"
            component={Produtos}
            options={({navigation}) => ({ title: 'Produtos',
              headerRightContainerStyle: { paddingRight: 20 },
              headerRight: () => <Ionicons
                name="add"
                size={40}
                color="#4bb543"
                onPress={() => navigation.navigate('Cadastrar')} />
              })} />
          <Stack.Screen 
            name="Produto" component={Tabs} 
            options={{ title:'Produto'}, {headerTitleAlign: 'center'}} />    
          <Stack.Screen 
            name="Cadastrar" component={Cadastrar} 
            options={{ title:'Cadastrar Produto'}, {headerTitleAlign: 'center'}} />    
      </Stack.Navigator>
  );
}