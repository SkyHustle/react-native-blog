import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title='Add Blog Post'
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default CreateScreen;