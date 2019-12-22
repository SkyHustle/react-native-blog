import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return(
    <View>
      <Button
        title='Add Blog Post'
        onPress={addBlogPost}
      />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title }
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name='trash' />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;