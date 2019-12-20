import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return(
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title }
        renderItem={({ item }) => {
          return (
            <Text>{item.title}</Text>
          );
        }}
      />
      <Button
        title='Add Blog Post'
        onPress={addBlogPost}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;