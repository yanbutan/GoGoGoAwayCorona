const headerStyle = theme => ({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#2D767F',
  },
  viewLeft: {flex: 0.8, flexDirection: 'row', justifyContent: 'flex-start'},
  viewRight: {flexDirection: 'row', justifyContent: 'flex-end'},
  summary: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'left',
  },
  titleText: {fontSize: 20, color: '#1E6262'},
  text: {fontSize: 15, color: '#1E6262'},
  picker: {
    backgroundColor: '#ECFFFB',
    height: 50,
    width: 150,
    borderRadius: 10,
    // padding: 0
  },
  pickerLabel: {color: '#1E6262'},
});

export default headerStyle;
