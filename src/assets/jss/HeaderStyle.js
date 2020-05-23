const headerStyle = theme => ({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#49BEB7',
  },
  section: {marginBottom: 30, marginTop: 20},
  viewLeft: {flex: 0.8, flexDirection: 'row', justifyContent: 'flex-start'},
  viewRight: {flexDirection: 'row', justifyContent: 'flex-end'},
  horizontalContain: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'left',
  },
  titleText: {fontSize: 20, color: '#1E6262', marginLeft: 2},
  text: {fontSize: 15, color: '#1E6262'},
  picker: {
    backgroundColor: '#ECFFFB',
    height: 50,
    width: 150,
    borderRadius: 10,
    // padding: 0
  },
  pickerLabel: {color: '#1E6262'},
  verticalContain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  card: {
    marginTop: 5,
    borderRadius: 10,
    width: 180,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F5F6",
    color: "#000"
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // confirmed: {
  //   backgroundColor: '#3e3636',
  //   // marginLeft: 0,
  //   padding: 30,
  // },
  // death: {
  //   backgroundColor: '#F4F5F6',
  //   padding: 30,
  // },
  // recovered: {
  //   backgroundColor: '#49BEB7',
  //   padding: 30,
  // },
  cardPrimary: {
    color: '#1E6262',
    fontSize: 30,
  },
  cardSecondary: {
    color: '#49BEB7',
  },
});

export default headerStyle;
