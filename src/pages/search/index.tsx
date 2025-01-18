import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import fetchBooks from "@/lib/fetch-books";
import BookItem from "@/components/book-item";
import { useRouter } from "next/router";

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext,
// ) => {
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);
//   return {
//     props: {
//       books,
//     },
//   };
// };

export default function Page() {
  const router = useRouter();
  console.log(router.query.q);
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
