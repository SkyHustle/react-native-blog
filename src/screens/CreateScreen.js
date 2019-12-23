import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = () => {
  // const [term, setTerm] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        style={styles.inputStyle}
        placeholder='Blog Title'
        autoCapitalize='none'
        autoCorrect={true}
        value=''
        
        onEndEditing={addBlogPost}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
});

export default CreateScreen;