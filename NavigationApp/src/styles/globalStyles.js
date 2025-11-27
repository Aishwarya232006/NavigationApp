import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',  // ← pushes items down
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,  // ← BIGGER space under title
  },

  buttonContainer: {
    marginTop: 15,     // ← SPACE ABOVE button
    marginBottom: 15,  // ← SPACE BELOW button
    width: '80%',      // ← gives room so buttons don’t stretch
    alignSelf: 'center',
  },
});
