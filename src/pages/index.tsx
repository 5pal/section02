import fetchBooks from "@/lib/fetch-books";
import { InferGetStaticPropsType } from "next";
import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode } from "react";
import BookItem from "@/components/book-item";
import fetchRandomBooks from "@/lib/fetch-random-books";

// SSG
export const getStaticProps = async () => {
  console.log("getStaticProps");
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: { allBooks, recoBooks },
  };
};
export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div>
        <section>
          <h3>지금 추천하는 도서</h3>
        </section>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
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
