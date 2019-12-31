import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.id}</Text>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
        <EvilIcons name='pencil' style={styles.icon} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 35
  }
});

export default ShowScreen;