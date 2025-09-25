"use client";

import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1", // String instead of number
    title:
      "How to Ensure Unique User Profile with ON CONFLICT in PostgreSQL Using Drizzle ORM?", // Mapped from `question`
    tags: [
      { _id: "1", name: "postgresql" }, // Ensure `_id` is a string
      { _id: "2", name: "drizzle" },
    ],
    author: {
      _id: "123", // Add a unique ID for the author
      name: "John Doe",
      picture: "path/to/picture.jpg", // Assuming a placeholder image path
    },
    upvotes: 5,
    views: 10,
    answers: [], // Assuming no specific answer objects are provided
    createdAt: new Date("2021-09-20T16:00:00.000Z"), // Ensure it's a Date object
  },
  {
    _id: "2", // Changed to string and unique
    title:
      "What are the benefits and trade-offs of using Server-Side Rendering (SSR) in Next.js?", // Mapped from `question`
    tags: [
      { _id: "1", name: "nextjs" },
      { _id: "2", name: "ssr" },
      { _id: "3", name: "performance" },
    ],
    author: {
      _id: "123", // Same author, so same ID
      name: "John Doe",
      picture: "path/to/picture.jpg",
    },
    upvotes: 1560000,
    views: 10,
    answers: [], // Again assuming no specific answer objects
    createdAt: new Date("2024-09-20T16:00:00.000Z"),
  },

  {
    _id: "1", // String instead of number
    title:
      "How to Ensure Unique User Profile with ON CONFLICT in PostgreSQL Using Drizzle ORM?", // Mapped from `question`
    tags: [
      { _id: "1", name: "postgresql" }, // Ensure `_id` is a string
      { _id: "2", name: "drizzle" },
    ],
    author: {
      _id: "123", // Add a unique ID for the author
      name: "John Doe",
      picture: "path/to/picture.jpg", // Assuming a placeholder image path
    },
    upvotes: 5,
    views: 10,
    answers: [], // Assuming no specific answer objects are provided
    createdAt: new Date("2021-09-20T16:00:00.000Z"), // Ensure it's a Date object
  },
  {
    _id: "2", // Changed to string and unique
    title:
      "What are the benefits and trade-offs of using Server-Side Rendering (SSR) in Next.js?", // Mapped from `question`
    tags: [
      { _id: "1", name: "nextjs" },
      { _id: "2", name: "ssr" },
      { _id: "3", name: "performance" },
    ],
    author: {
      _id: "123", // Same author, so same ID
      name: "John Doe",
      picture: "path/to/picture.jpg",
    },
    upvotes: 1560000,
    views: 10,
    answers: [], // Again assuming no specific answer objects
    createdAt: new Date("2024-09-20T16:00:00.000Z"),
  },
];

const page = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          iconSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((item) => (
            <QuestionCard
              key={item._id}
              _id={item._id}
              title={item.title}
              tags={item.tags}
              author={item.author}
              upvotes={item.upvotes}
              views={item.views}
              answers={item.answers}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default page;
