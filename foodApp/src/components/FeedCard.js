import React from 'react';
import {View, Image, Text} from 'react-native';
import {Rating} from 'react-native-ratings';
import styles from './feedCard-styles';

const FeedCard = ({item, index}) => {
  return (
    <View key={index} style={styles.itemList}>
      <View style={styles.listItemContainer}>
        <Image source={item.img} style={styles.itemImg} />
      </View>
      <View style={styles.itemListContent}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.subTitleContainer}>
          <Image
            source={require('../assets/images/nav.png')}
            style={styles.navImg}
          />
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.subTitle}>
            {item.subTitle}
          </Text>
        </View>
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={10}
          ratingColor="orange"
          ratingBackgroundColor="orange"
          readonly={true}
          startingValue={item.rating}
        />
      </View>
    </View>
  );
};

export default FeedCard;
