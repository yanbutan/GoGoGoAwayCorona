const num_to_month = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};

export const preprocess = (newsData, trendData, summaryData) => {
  // Processing the summary Data

  newsData.forEach(function(article) {
    //Change date format
    let date = article.publishedAt.slice(0, 10);
    let month_num = date.split('-')[1];
    article.publishedAt = `${date.split('-')[2]} ${num_to_month[month_num]} ${
      date.split('-')[0]
    }`;

    // Replace all regular expressions
    // Split the string into array based on line break \r\n
    console.log('COntent >>> ', article.content);
    console.log('Description >>> ', article.description);
    if (article.content) {
      if (Array.isArray(article.content))
        article.content = article.content[0].split('\r\n');
      else article.content = article.content.split('\r\n');
    }

    if (article.description)
      if (Array.isArray(article.description))
        article.description = article.description[0].split('\r\n');
      else article.description = article.description.split('\r\n');
  });

  //Preprocessing of trend data fetched from api endpoint
  let processedTrendData = {
    months: [],
    graphData: [],
  };
  let counter = 5;
  let i = 0;
  while (counter >= 0) {
    let month = num_to_month[trendData[i].last_update.split('-')[1]];
    if (!processedTrendData.months.includes(month)) {
      processedTrendData.months.unshift(month);
      if (trendData[i].cases)
        processedTrendData.graphData.unshift(trendData[i].cases);
      else processedTrendData.graphData.unshift(trendData[i].total_cases);

      counter--;
    }
    i++;
  }
  return processedTrendData;
};
