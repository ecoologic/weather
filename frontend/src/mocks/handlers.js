// Mock Service Workers
import { rest } from 'msw';
import { API_URL } from '../Weather/WeatherApi';

// rest.get(
//   `${API_URL}/`,
//   (_request, response, context) => {
//     return response(
//       context.status(200),
//       context.json([])
//     );
//   }
// ),

export const handelrs = [
  rest.get(`${API_URL}/location/search`, (_request, response, context) => {
    return response(
      context.status(200),
      context.json([
        {
          title: 'Brisbane',
          location_type: 'City',
          woeid: 1100661,
          latt_long: '-27.468880,153.022827',
        },
      ])
    );
  }),
  rest.get(`${API_URL}/location/1100661`, (_request, response, context) => {
    return response(
      context.status(200),
      context.json({
        consolidated_weather: [
          {
            id: 6489893069914112,
            weather_state_name: 'Clear',
            weather_state_abbr: 'c',
            wind_direction_compass: 'NNE',
            created: '2021-08-22T07:16:58.542018Z',
            applicable_date: '2021-08-22',
            min_temp: 13.325,
            max_temp: 25.36,
            the_temp: 23.925,
            wind_speed: 3.805043199384926,
            wind_direction: 31.15003627657582,
            air_pressure: 1021.5,
            humidity: 58,
            visibility: 16.962812176886978,
            predictability: 68,
          },
          {
            id: 5037737280274432,
            weather_state_name: 'Light Cloud',
            weather_state_abbr: 'lc',
            wind_direction_compass: 'NNE',
            created: '2021-08-22T07:17:01.642969Z',
            applicable_date: '2021-08-23',
            min_temp: 14.219999999999999,
            max_temp: 24.375,
            the_temp: 22.985,
            wind_speed: 6.258757331024152,
            wind_direction: 26.15813236710334,
            air_pressure: 1019.5,
            humidity: 60,
            visibility: 15.782828282828282,
            predictability: 70,
          },
          {
            id: 4665522965708800,
            weather_state_name: 'Light Rain',
            weather_state_abbr: 'lr',
            wind_direction_compass: 'W',
            created: '2021-08-22T07:17:04.270270Z',
            applicable_date: '2021-08-24',
            min_temp: 11.370000000000001,
            max_temp: 20.315,
            the_temp: 16.785,
            wind_speed: 8.63489192624937,
            wind_direction: 276.47211297160914,
            air_pressure: 1014.0,
            humidity: 66,
            visibility: 14.625835122882366,
            predictability: 75,
          },
          {
            id: 5293302162128896,
            weather_state_name: 'Clear',
            weather_state_abbr: 'c',
            wind_direction_compass: 'W',
            created: '2021-08-22T07:17:07.150005Z',
            applicable_date: '2021-08-25',
            min_temp: 8.985,
            max_temp: 21.16,
            the_temp: 18.045,
            wind_speed: 6.731331469378827,
            wind_direction: 260.83483892731147,
            air_pressure: 1017.0,
            humidity: 39,
            visibility: 16.305090769903764,
            predictability: 68,
          },
          {
            id: 4968799196413952,
            weather_state_name: 'Light Cloud',
            weather_state_abbr: 'lc',
            wind_direction_compass: 'WNW',
            created: '2021-08-22T07:17:10.656946Z',
            applicable_date: '2021-08-26',
            min_temp: 8.815000000000001,
            max_temp: 20.96,
            the_temp: 19.185000000000002,
            wind_speed: 4.271035444394072,
            wind_direction: 295.4820220861553,
            air_pressure: 1020.5,
            humidity: 44,
            visibility: 15.296916010498688,
            predictability: 70,
          },
          {
            id: 6066672965255168,
            weather_state_name: 'Clear',
            weather_state_abbr: 'c',
            wind_direction_compass: 'NNW',
            created: '2021-08-22T07:17:13.159841Z',
            applicable_date: '2021-08-27',
            min_temp: 10.18,
            max_temp: 22.735,
            the_temp: 19.5,
            wind_speed: 4.292208104668735,
            wind_direction: 336.5,
            air_pressure: 1024.0,
            humidity: 52,
            visibility: 9.999726596675416,
            predictability: 68,
          },
        ],
        time: '2021-08-22T20:04:25.674947+10:00',
        sun_rise: '2021-08-22T06:11:04.247097+10:00',
        sun_set: '2021-08-22T17:29:59.952261+10:00',
        timezone_name: 'LMT',
        parent: {
          title: 'Australia',
          location_type: 'Country',
          woeid: 23424748,
          latt_long: '-24.912100,133.397552',
        },
        sources: [
          {
            title: 'BBC',
            slug: 'bbc',
            url: 'http://www.bbc.co.uk/weather/',
            crawl_rate: 360,
          },
          {
            title: 'Forecast.io',
            slug: 'forecast-io',
            url: 'http://forecast.io/',
            crawl_rate: 480,
          },
          {
            title: 'Met Office',
            slug: 'met-office',
            url: 'http://www.metoffice.gov.uk/',
            crawl_rate: 180,
          },
          {
            title: 'OpenWeatherMap',
            slug: 'openweathermap',
            url: 'http://openweathermap.org/',
            crawl_rate: 360,
          },
          {
            title: 'Weather Underground',
            slug: 'wunderground',
            url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
            crawl_rate: 720,
          },
          {
            title: 'World Weather Online',
            slug: 'world-weather-online',
            url: 'http://www.worldweatheronline.com/',
            crawl_rate: 360,
          },
        ],
        title: 'Brisbane',
        location_type: 'City',
        woeid: 1100661,
        latt_long: '-27.468880,153.022827',
        timezone: 'Australia/Brisbane',
      })
    );
  }),
];
