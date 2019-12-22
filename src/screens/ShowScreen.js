import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blog = state.find(blog => blog.id === id);

  return (
    <View>
      <Text>Show Screen for {blog.title} {blog.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;