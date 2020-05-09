const newsStyle = theme => ({
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewLeft: {flex: 0.95, flexDirection: 'row', justifyContent: 'flex-start'},
  titleText: {fontSize: 20, color: '#1E6262', marginLeft: 15},
  newsCard: {
    margin: 12,
    borderRadius: 0,
    height: 170,
    width: 300,
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
  newsPrimary: {
    color: '#2D767F',
    fontSize: 40,
    marginLeft: 30,
  },
  newsSecondary: {
    color: '#2D767F',
    // fontSize: 25,
    marginLeft: 30,
  },
});

export default newsStyle;
