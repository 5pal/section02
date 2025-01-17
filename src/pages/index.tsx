import style from "./index.module.css";
import fetchBooks from "@/lib/fetch-books";
import { InferGetServerSidePropsType } from "next";
import books from "@/mock/books.json";
import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode } from "react";
import BookItem from "@/components/book-item";

export const getServerSideProps = async () => {
  const allBooks = await fetchBooks();
  return {
    props: { allBooks },
  };
};
export default function Home({
  allBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div>
        <section>
          <h3>지금 추천하는 도서</h3>
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
