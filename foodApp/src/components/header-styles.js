import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  menu: {
    height: 24,
    width: 24,
  },
  searchContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterContainer: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  filter: {
    height: 34,
    width: 34,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default styles;
