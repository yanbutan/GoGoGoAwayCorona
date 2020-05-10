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
    height: 200,
    width: 300,
    backgroundColor: '#fff',
    borderColor: '#dddddd',
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
    fontSize: 20,
  },
  newsSecondary: {
    color: '#2D767F',
  },
  image: {
    flex: 2,
  },
  newsSummary: {flex: 1, paddingLeft: 10, paddingTop: 10},
});

export default newsStyle;
