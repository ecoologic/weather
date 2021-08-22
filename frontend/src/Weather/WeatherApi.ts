import Api from '../utils/Api';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com';
const WEATHER_BASE_URL = 'https://www.metaweather.com/api';
const PROXIED_URL = `${PROXY_URL}/${WEATHER_BASE_URL}`;

// TODO: private??
class WeatherApi {
  locationQuery: string;
  woeid: number | undefined;

  constructor(locationQuery: string) {
    this.locationQuery = locationQuery;
  }

  // https://www.metaweather.com/api/location/1100661/
  async nextDays() {
    const woeid = await this.getWoeid();

    const response = await Api.get(`${PROXIED_URL}/location/${woeid}`);
    if (response.success) {
      return response.data;
    } // TODO: error handling
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
