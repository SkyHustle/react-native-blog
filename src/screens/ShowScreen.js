import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
        <Feather name='edit-2' style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24
  }
});

export default ShowScreen;