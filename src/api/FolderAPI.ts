import API from './API';

export default class FolderAPI extends API {
  urlGetFolders: string = this.baseHost.concat('folders/{citizen}');
  urlCreateFolders: string = this.baseHost.concat('folder/save');
  urlGetDocumentsByFolders: string = this.baseHost.concat(
    'documents/folder/{idFolder}',
  );
  urlCreateDocumentInFolder: string = this.baseHost.concat('documents/save');

  constructor() {
    super();
  }

  getFolders = async (idCitizen: string) => {
    try {
      this.urlGetFolders = this.urlGetFolders.replace('{citizen}', idCitizen);
      const response = await this.get(this.urlGetFolders);
      const data = await response.json();
      if (!response.ok || (response.status !== 200 && response.status !== 201))
        throw {data, status: response.status};
      return data;
    } catch (error) {
      throw error;
    }
  };

  createFolder = async (json: any) => {
    try {
      const response = await fetch(
        this.urlCreateFolders,
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

  getDocumentsByFolder = async (idFolder: string) => {
    try {
      this.urlGetDocumentsByFolders = this.urlGetDocumentsByFolders.replace(
        '{idFolder}',
        idFolder,
      );
      const response = await this.get(this.urlGetDocumentsByFolders);
      const data = await response.json();
      if (!response.ok || (response.status !== 200 && response.status !== 201))
        throw {data, status: response.status};
      return data;
    } catch (error) {
      throw error;
    }
  };

  createDocumentInFolder = async (json: any) => {
    try {
      const response = await fetch(
        this.urlCreateDocumentInFolder,
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
