import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return(
    <View>
      <FlatList
        data={data}
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