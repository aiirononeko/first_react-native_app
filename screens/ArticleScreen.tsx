import React from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import ClipButtom from '../components/ClipButtom';

export default function AppNavigator({ route }) {
  const { article } = route.params;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { clips } = user;

  const isCliped = () => {
    return clips.some(clip => clip.url == article.url );
  }

  const toggleClip = () => {
    if (isCliped()) {
      dispatch(deleteClip({
        clip: article
      }))
    } else {
      dispatch(addClip({
        clip: article
      }))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ClipButtom onPress={toggleClip} enabled={isCliped()}/>
      <WebView
        source={{ uri: article.url }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
