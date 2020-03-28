import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ListItems = ({ imageUrl, title, author, onPress }) => {
  return(
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.rightContainer}>
        <Image
          style={{
            width: 100,
            height: 100
          }}
          source={{
            uri: imageUrl
          }}
        />
      </View>
      <View style={styles.leftContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>
          {author}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row'
  },
  rightContainer: {
    width: 100,
  },
  leftContainer: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: 'gray'
  }
})

export default ListItems;
