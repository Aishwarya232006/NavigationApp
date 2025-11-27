import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const DetailsScreen = ({ route, navigation }) => {
  const { itemId, itemName } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Item Name: {itemName}</Text>

      <View style={globalStyles.buttonContainer}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>

      <View style={globalStyles.buttonContainer}>
        <Button
          title="Update Params"
          onPress={() => navigation.setParams({ itemName: 'Updated Item' })}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
