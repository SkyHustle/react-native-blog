import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        title='Save Blog Post'
        onPress={() => onSubmit(initialValues.id, title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    id: 0,
    title: '',
    content: ''
  }
}

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

export default BlogPostForm;