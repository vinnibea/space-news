import { Article } from "./types/types";

export const queryFilterAndLight = (
  article: Article,
  query: string,
  key: keyof Article
): Article => {
  let count = 0;
  const articleArraySummary = article[key]
    .toString()
    .slice(0, key === "summary" ? 97 : article[key].toString().length)
    .split(" ")
    .map((word) => {
      const preparedWord = word.replace(/[.,]/gi, "").toLowerCase();
      const preparedQuery: string[] = query.toLowerCase().split(" ");
      const find = preparedQuery.find((query) => query === preparedWord);
      if (find) {
        count++;
        return `<span style="background: yellow">${word}</span>`;
      }

      return word;
    })
    .join(" ");
  const span = `<span style="background: yellow"></span>`;
  const newArticle: Article = {
    ...article,
    [key]: articleArraySummary,
    [`${key}Count`]: span.length * count,
  };

  return newArticle;
};

interface DateInterface {
  day: string;
  month: string;
  year: string;
}
export const convertDate = (article: Article): DateInterface => {
  const dateToArray = article.publishedAt.split("T")[0].split("-");
  return {
    year: dateToArray[0],
    month: Intl.DateTimeFormat("en", { month: "long" }).format(
      new Date(dateToArray[1])
    ),
    day: dateToArray[2] + "th",
  };
};

export const sliceTo = (article: Article): string => {
  const sliceToLength = 97 + article.summaryCount || 0;
  return article.summary.slice(0, sliceToLength) + "...";
};

export const prioritySort = (a: Article, b: Article): number => {
  return b.titleCount > a.titleCount
    ? 1
    : b.titleCount === a.titleCount
    ? b.summaryCount > a.summaryCount
      ? 1
      : -1
    : -1;
};

export const filters = (
  article: Article,
  text: string
): Article | undefined => {
  if (!text.length) {
    return article;
  }
  if (
    (text.length && article.titleCount) ||
    (text.length && article.summaryCount)
  ) {
    return article;
  }

  return;
};
