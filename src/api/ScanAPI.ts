import API from './API';

export default class ScanAPI extends API {
  urlScanAuthentification: string = this.baseHost.concat('scan/authenticate');

  constructor() {
    super();
  }

  scanAuthentification = async (json: any) => {
    try {
      const response = await fetch(
        this.urlScanAuthentification,
        this.post(null, json),
      );
      const data = await response.json();
      if (!response.ok || (response.status !== 200 && response.status !== 201))
        throw {data, status: response.status};
      return data;
    } catch (error) {
      throw error;
    }
  };
}
