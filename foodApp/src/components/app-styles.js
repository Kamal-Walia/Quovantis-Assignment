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
    padding: 10,
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
    alignItems: 'center',
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
  listStyle: {
    flex: 1,
    marginTop: 14,
  },
  itemImg: {
    height: 30,
    width: 30,
  },
  gradientStyle: {
    backgroundColor: 'green',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginTop: 8,
  },
  pro: {
    backgroundColor: '#428dbf',
    borderRadius: 8,
    padding: 4,
    width: 50,
  },
  tip: {
    color: 'white',
    textAlign: 'center',
  },
  tipText: {
    color: 'white',
    marginTop: 6,
  },
  qoute: {
    backgroundColor: '#eef6fa',
    padding: 14,
    alignItems: 'center',
    borderRadius: 8,
  },
  qouteContainer: {
    backgroundColor: 'white',
    padding: 22,
  },
  qouteText: {
    color: '#afc0e3',
  },
  separator: {
    padding: 8,
  },
  chatBubble: {
    borderRadius: 25,
    backgroundColor: '#1d82db',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    right: 4,
    top: 70,
    zIndex: 2,
    elevation: 3,
  },
});
export default styles;
