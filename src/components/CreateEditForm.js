import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateEditForm = ({ blogPostId, navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === blogPostId);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);


  return (
    <View>
      <Text style={styles.label}>Enter New Title:</Text>
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
        title='Save'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24
  },
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

export default CreateEditForm;