export type Property = {
  id: string;
  idProperty: number;
  name: string;
  address: string;
  price: number;
  codeInternal: string;
  year: number;
  idOwner: number;
};

export type PropertyImage = {
  id: string;
  idPropertyImage: number;
  idProperty: number;
  file: string;
  enabled: boolean;
};

export type PropertyTrace = {
  id: string;
  idPropertyTrace: number;
  dateSale: string;
  name: string;
  value: number;
  tax: number;
  idProperty: number;
};

export type Owner = {
  id: string;
  idOwner: number;
  name: string;
  address: string;
  photo?: string;
  birthday?: string;
};