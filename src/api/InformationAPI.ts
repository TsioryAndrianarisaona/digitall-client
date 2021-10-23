import API from './API';

export default class ScanAPI extends API {
  urlGetMenu: string = this.baseHost.concat('niveau');
  urlGetMenuDetails: string = this.baseHost.concat(
    'documents/niveau/{idniveau}',
  );

  constructor() {
    super();
  }

  getMenu = async () => {
    try {
      const response = await this.get(this.urlGetMenu);
      const data = await response.json();
      if (!response.ok || (response.status !== 200 && response.status !== 201))
        throw {data, status: response.status};
      return data;
    } catch (error) {
      throw error;
    }
  };

  getMenuDetails = async (idMenu: number) => {
    try {
      this.urlGetMenuDetails = this.urlGetMenuDetails.replace(
        '{idniveau}',
        idMenu.toString(),
      );
      const response = await this.get(this.urlGetMenuDetails);
      const data = await response.json();
      if (!response.ok || (response.status !== 200 && response.status !== 201))
        throw {data, status: response.status};
      return data;
    } catch (error) {
      throw error;
    }
  };
}
