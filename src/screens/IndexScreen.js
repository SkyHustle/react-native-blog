import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const value = useContext(BlogContext);

  return(
    <View>
      <FlatList
        data={value}
        keyExtractor={(value) => value.title }
        renderItem={( {item} ) => {
          return (
            <Text>{item.title}</Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;