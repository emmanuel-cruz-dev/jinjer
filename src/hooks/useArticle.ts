import { useParams } from "react-router-dom";

const useArticle = <T extends { id: number }>(arr: T[]): T | undefined => {
  const { id } = useParams<{ id: string }>();
  const article = arr.find((a) => a.id === parseInt(id || ""));
  return article;
};

export default useArticle;
