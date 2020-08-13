import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './header-styles';

const Header = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/menu.png')}
          style={styles.menu}
        />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Approved Foods List</Text>
      </View>
      <View style={styles.search}>
        <Image
          source={require('../assets/images/search.png')}
          style={styles.menu}
        />
        <TextInput
          onChangeText={props.handleSearch}
          value={props.search}
          placeholder={'Try searching fat, sauces names...'}
        />
      </View>
      <View style={styles.chatBubble}>
        <Image
          source={require('../assets/images/search.png')}
          style={styles.menu}
        />
      </View>
    </View>
  );
};

export default Header;
