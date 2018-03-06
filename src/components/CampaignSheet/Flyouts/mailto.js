import qs from 'querystring';

export default id =>
  `mailto:?${qs.stringify({
    subject: 'Gloomy Campaign ID',
    body: `
You've been invited to join a Gloomy Campaign!
Campaign ID: ${id}
Come join us over at https://gloomy.herokuapp.com
`.trim(),
  })}`;
