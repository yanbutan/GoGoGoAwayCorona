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

export const preprocess = data => {
  // data[3].content.replace(/\n/g, ' ');
  // console.log(data[3].content);
  data.forEach(function(article) {
    //Change date format
    let date = article.publishedAt.slice(0, 10);
    let month_num = date.split('-')[1];
    article.publishedAt = `${date.split('-')[2]} ${num_to_month[month_num]} ${
      date.split('-')[0]
    }`;

    // Replace all regular expressions
    // Split the string into array based on line break \r\n
    article.content = article.content.split('\r\n');
    article.description = article.description.split('\r\n');
  });
};
