import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: 'white',
    paddingBottom: 2,
    marginVertical: 8,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  listItemContainer: {
    alignItems: 'center',
    flex: 1,
  },
  itemImg: {
    height: 180,
    width: '100%',
  },
  itemListContent: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
  subTitle: {
    padding: 4,
    paddingBottom: 6,
    color: 'grey',
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navImg: {
    width: 15,
    height: 15,
  },
});
export default styles;
