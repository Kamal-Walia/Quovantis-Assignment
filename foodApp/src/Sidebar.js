import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from './sideBar-styles';

const MenuItem = (props) => {
  const {title, subTitle, navigation, route, id, iconUrl} = props;
  const handleNavigation = (id, route) => {
    switch (id) {
      case 1:
        navigation.navigate(route);
        break;
      case 2:
        alert('Coming Soon');
        break;
      default:
        navigation.navigate(route, null, navigation);
    }
  };
  return (
    <View style={[styles.menuItem]}>
      <TouchableOpacity
        onPress={() => handleNavigation(id, route)}
        style={styles.menuContent}>
        <View>
          <View style={styles.titleContainer}>
            <Image source={iconUrl} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
          </View>
          {subTitle ? (
            <Text
              ellipsizeMode="tail"
              numberOfLines={2}
              style={styles.subTitle}>
              {subTitle}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sidebarItems = [
      {
        id: 1,
        title: 'Home',
        route: 'Home',
        iconUrl: require('./assets/images/home.png'),
      },
      {
        id: 2,
        title: 'Logout',
        iconUrl: require('./assets/images/logout.png'),
      },
    ];

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.menuItems}>
            <View>
                {sidebarItems.map((item, index) => {
                  return (
                    <MenuItem
                      navigation={this.props.navigation}
                      key={index}
                      {...item}
                    />
                  );
                })}
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Sidebar;
