const caseTrendStyle = theme => ({
  section: {
    marginBottom: 30,
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'stretch',
  },
  horizontalContain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewLeft: {flex: 0.93, flexDirection: 'row', justifyContent: 'flex-start'},
  titleText: {fontSize: 20, color: '#1E6262', marginLeft: 0},
  graphCard: {
    margin: 12,
    borderRadius: 10,
    height: 100,
    backgroundColor: '#F0F1F3',
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
  cardPrimary: {
    color: '#ECFFFB',
    fontSize: 40,
  },
  cardSecondary: {
    color: '#ECFFFB',
    // fontSize: 25,
    marginLeft: 60,
  },
  chart: {
    borderRadius: 10,
    margin: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default caseTrendStyle;
