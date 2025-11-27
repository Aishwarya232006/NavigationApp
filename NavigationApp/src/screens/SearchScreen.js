import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Search Screen</Text>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 8,
          padding: 12,
          width: '100%',
          marginBottom: 20,
        }}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Text>Searching for: {searchQuery}</Text>
    </View>
  );
};

export default SearchScreen;
