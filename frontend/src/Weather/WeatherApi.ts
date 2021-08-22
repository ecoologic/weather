import Api from '../utils/Api';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com';
const WEATHER_BASE_URL = 'https://www.metaweather.com/api';
const PROXIED_URL = `${PROXY_URL}/${WEATHER_BASE_URL}`;

interface IrawDayWeather {
  weather_state_name: string;
  weather_state_abbr: string;
  min_temp: number;
  max_temp: number;
  wind_speed: number;
}

export interface IdayWeather {
  weatherStateName: string;
  weatherStateAbbr: string;
  minTemp: number;
  maxTemp: number;
  windSpeed: number;
}

export interface Ilocation {
  woeid: number;
  name: string;
}

// TODO: private??
class WeatherApi {
  locationQuery: string;
  woeid: number | undefined;

  constructor(locationQuery: string) {
    this.locationQuery = locationQuery;
  }

  // https://www.metaweather.com/api/location/1100661/
  async nextDays(): Promise<IdayWeather[]> {
    const woeid = await this.getWoeid();

    const response = await Api.get(`${PROXIED_URL}/location/${woeid}`);
    if (response.success) {
      return response.data.consolidated_weather.map(
        (dayWeather: IrawDayWeather) => ({
          weatherStateName: dayWeather.weather_state_name,
          weatherStateAbbr: dayWeather.weather_state_abbr,
          minTemp: dayWeather.min_temp,
          maxTemp: dayWeather.max_temp,
          windSpeed: dayWeather.wind_speed,
        })
      );
    } else {
      // TODO: error handling
      return [];
    }
  }

  // https://www.metaweather.com/api/location/search/?query=san
  async getWoeid(): Promise<number | undefined> {
    const response = await Api.get(`${PROXIED_URL}/location/search`, {
      query: this.locationQuery,
    });
    if (response.success) {
      // TODO: many
      this.woeid = response.data[0].woeid;
      return this.woeid;
    }
  }
}

export default WeatherApi;
