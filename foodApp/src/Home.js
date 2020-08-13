import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from './components/Header';
import FeedCard from './components/FeedCard';
import styles from './components/app-styles.js';
import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const fetch = require('node-fetch');

const API = 'https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      data: null,
      search: null,
    };
  }

  handlePress = () => {
    alert('Coming Soon');
  };

  _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Image
          source={require('./assets/images/dummy.png')}
          style={styles.itemImg}
        />
        <Text style={[styles.headerText, {color: section.category.colorCode}]}>
          {section.category.categoryName}
        </Text>
        {section.category.servingSize ? (
          <Text style={styles.subHeader}>({section.category.servingSize})</Text>
        ) : null}
      </View>
    );
  };

  getItems = (items) => {
    return items.map((item, index) => (
      <View key={index} style={styles.content}>
        <Text
          style={
            this.state.search && this.state.search !== ''
              ? item.includes(this.state.search)
                ? {backgroundColor: 'yellow'}
                : {}
              : {}
          }>
          {item}
        </Text>
      </View>
    ));
  };

  handleSearch = (search) => {
    console.log(search);
    this.setState({search});
  };

  getFeedData = () => {
    if (!this.state.search || this.state.search === '') {
      return this.state.data.categories;
    } else {
      return this.state.data.categories.filter((item) =>
        item.category.subcategories.some((item) =>
          item.items.toString().includes(this.state.search),
        ),
      );
    }
  };

  _renderContent = (section) => {
    return (
      <View>
        {section.category.subcategories.map((item) => {
          return (
            <View>
              {item.subCategoryname !== '' ? (
                <View style={styles.content}>
                  <Text style={styles.subCategoryname}>
                    {item.subCategoryname}
                  </Text>
                </View>
              ) : null}
              {this.getItems(item.items)}
            </View>
          );
        })}
        {section.category.quote ? (
          <View style={styles.qouteContainer}>
            <View style={styles.qoute}>
              <Text style={styles.qouteText}>{section.category.quote}</Text>
            </View>
          </View>
        ) : null}
        {section.category.protip ? (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#7fa9e7', '#4daee2', '#73dbe3']}
            style={styles.gradientStyle}>
            <View style={styles.pro}>
              <Text style={styles.tip}>Tip</Text>
            </View>

            <Text style={styles.tipText}>
              {`Protip: ${section.category.protip}`}
            </Text>
          </LinearGradient>
        ) : null}
      </View>
    );
  };

  _updateSections = (index) => {
    return () => {
      if (this.state.activeSections.includes(index)) {
        const remainingSections = this.state.activeSections;
        remainingSections.splice(index, 1);
        this.setState({
          activeSections: remainingSections,
        });
      } else {
        this.setState({activeSections: [...this.state.activeSections, index]});
      }
    };
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        this.setState({data: json});
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.chatBubble} onPress={this.handlePress}>
          <Icon name={'md-chatbox-ellipses-sharp'} size={20} color={'white'} />
        </TouchableOpacity>
        <View style={styles.subContainer}>
          <Header
            handlePress={this.handlePress}
            handleSearch={this.handleSearch}
            search={this.state.search}
          />
          {this.state.data ? (
            <FlatList
              data={this.getFeedData()}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={true}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              keyExtractor={(item, index) => `${index}`}
              style={styles.listStyle}
              renderItem={({item, index}) => {
                return (
                  <View key={index}>
                    <TouchableOpacity onPress={this._updateSections(index)}>
                      {this._renderHeader(item)}
                    </TouchableOpacity>

                    <Collapsible
                      index={index}
                      collapsed={!this.state.activeSections.includes(index)}>
                      {this._renderContent(item)}
                    </Collapsible>
                  </View>
                );
              }}
            />
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
