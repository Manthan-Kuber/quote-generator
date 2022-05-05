export interface dataItem {
  _id: string;
  author: string;
  authorSlug: string;
  content: string;
  dataAdded: string;
  dataModified: string;
  length: number;
  tags: Array<string>;
}

export interface DataProps {
  data: dataItem | undefined;
  index?: number;
  loading?: boolean;
}

interface quoteItem extends dataItem {
  __v: number;
  authorId: string;
}

export interface authorQuotesData {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number | null;
  results: quoteItem[];
}
