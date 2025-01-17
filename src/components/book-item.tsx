import { BookData } from "@/types";

export default function BookItem({
  id,
  author,
  description,
  publisher,
  title,
  subTitle,
  coverImgUrl,
}: BookData) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImgUrl} />
    </div>
  );
}
