export interface INews {
  _id?: string;
  text: string;
  header: string;
  imgPath: any[];
  checked: any[];
  createdAt: string;
}

export interface INewsEditData {
  id: string;
  role: string;
  header: string;
  text: string;
}
