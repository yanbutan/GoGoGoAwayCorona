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
  viewRight: {flexDirection: 'row', justifyContent: 'flex-end'},
  newsCard: {
    margin: 12,
    borderRadius: 10,
    height: 200,
    width: 250,
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
    fontSize: 17,
    fontWeight: 'bold',
    paddingRight: 5,
  },
  newsSecondary: {
    color: '#2D767F',
    fontSize: 13,
  },
  image: {
    flex: 2,
  },
  newsSummary: {flex: 1.6, paddingLeft: 10, paddingTop: 5, paddingRight: 10},
  iconGrp: {
    backgroundColor: '#ECEEF5',
    borderRadius: 20,
    padding: 5,
    fontSize: 35,
  },
  articleContainer: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 10,
  },
  articlePicture: {
    height: 250,
    marginTop: 5,
    marginBottom: 5,
  },
  articleTitle: {
    color: '#2D767F',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 5,
  },
  articleSubtitle: {
    color: '#2D767F',
    fontSize: 17,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  articleContentContain: {
    margin: 10,
  },
  articleContentText: {
    color: '#2D767F',
    fontSize: 20,
    marginBottom: 10,
    lineHeight: 33,
  },
  articleDescripContain: {
    margin: 10,
    marginBottom: 5,
  },
  articleDescripText: {
    marginBottom: 10,
    color: '#2D767F',
    fontSize: 18,
    opacity: 0.7,
    fontStyle: 'italic',
    textTransform: 'capitalize',
    lineHeight: 30,
  },
  readMoreContain: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ECEEF5',
    opacity: 0.7,
  },
  readMoreText: {
    color: '#2D767F',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default newsStyle;
