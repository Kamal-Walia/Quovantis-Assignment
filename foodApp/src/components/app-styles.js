import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eae9ef',
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 12,
    flex: 1,
  },
  content: {
    padding: 6,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eae9ef',
  },
  header: {
    padding: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 0.5},
    borderBottomWidth: 1,
    borderBottomColor: '#eae9ef',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 6,
  },
  listContainer: {
    flex: 1,
    marginTop: 4,
  },
  headerText: {
    marginLeft: 4,
    fontSize: 16,
  },
  subHeader: {
    color: 'black',
    marginLeft: 4,
  },
  subCategoryname: {
    fontWeight: 'bold',
  },
  listStyle:{
    flex:1,
    marginTop:14
  }
});
export default styles;
