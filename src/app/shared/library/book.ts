export interface Book {
  id: string;
  title: string;
  author?: string;
  author_firstname?: string;
  author_lastname?: string;
  author_middlename?: string;
  categories?: Array<string> | string;
  volume?: string | number;
  year?: number;
  edition?: string | number;
  language?: string;
  extension?: FileExtension;
  pages?: number;
  filesize?: number;
  md5?: string;
  series?: any;
  periodical?: any;
  file_extension?: FileExtension;
  url?: string;
  description?: string;
  cover?: string;
}

export enum FileExtension {
  PDF = 'pdf'
}
