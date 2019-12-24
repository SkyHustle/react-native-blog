import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>Enter New Title:</Text>
      <Text>{blogPost.title}</Text>
      <Text>Enter New Content</Text>
      <Text>{blogPost.content}</Text>
      <Button
        title='Save'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24
  }
});

export default EditScreen;