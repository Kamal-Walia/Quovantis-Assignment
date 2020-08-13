import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0,
    marginLeft: 20,
  },
  subTitle: {
    fontSize: 13,
    marginLeft: 20,
    marginTop: 5,
    fontWeight: 'normal',
    fontStyle: 'normal',
    maxWidth: '90%',
  },
  menuItems: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export default styles;
