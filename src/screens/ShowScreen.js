import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;