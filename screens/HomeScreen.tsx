import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItems from '../components/ListItems';
import Constants from 'expo-constants';
import axios from 'axios';

export default function HomeScreen({ navigation }) {

  const [articles, setArticles] = useState([]); 

  const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

  useEffect(() => {
    fetchArticles();
  }, []);
  
  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={articles}
        renderItem={({ item }) =>
         <ListItems
          imageUrl={item.urlToImage}
          title={item.title}
          author={item.author}
          onPress={() => { navigation.navigate('Article', {
            article: item
          })}}
         />
        }
        keyExtractor={(item, index) => index.toString()}
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
