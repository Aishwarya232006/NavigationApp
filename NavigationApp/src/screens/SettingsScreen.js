import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Settings Screen</Text>

      <View style={{ width: '100%', marginBottom: 20 }}>
        <Text>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <View style={{ width: '100%', marginBottom: 20 }}>
        <Text>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
