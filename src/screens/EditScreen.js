import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';
import CreateEditForm from '../components/CreateEditForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  return (
    <CreateEditForm blogPostId={id} />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;