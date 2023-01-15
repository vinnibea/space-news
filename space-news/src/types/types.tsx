export interface Article {
  summary: string;
  publishedAt: string;
  title: string;
  imageUrl: string;
  id: number;
  titleCount: number;
  summaryCount: number;
}

export interface ContextInterface {
  articles: Article[];
  useAPI: Function;
}

export interface CardItemProps {
    article: Article;
    summary: string;
    month: string;
    day: string;
    year: string;
  }