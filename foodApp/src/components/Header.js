import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './header-styles';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.handlePress}>
        <Icon name={'close'} size={30} color={'black'} />
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
    </View>
  );
};

export default Header;
