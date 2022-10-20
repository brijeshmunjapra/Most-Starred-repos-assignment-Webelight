import Button from "./components/buttons/Button";
import Header from "./components/header/Header";
import Repo from './components/repo/Repo';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import Loading from "./components/Loader/Loading";

export default function App() {
  const [todayDate, setTodayDate] = useState("");
  const [repos, setRepos] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //date of today
  function setDate() {
    const date = new Date();
    const day = date.getDate() - 1 < 10 ? `0${date.getDate() - 1}` : date.getDate() - 1;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const today = [year, month, day].join("-");
    setTodayDate(today);
  }
  console.log(todayDate, "date");

  //go to next page
  function nextPage() {
    setLoading(true);
    setPage(page + 1);
  }

  //go to prev page
  function prevPage() {
    if (page > 1) {
      setLoading(true);
      setPage(page - 1);
    }
  }

  useEffect(() => {
    setDate();
    // fetch data from github url
    todayDate &&
      axios
        .get(
          `https://api.github.com/search/repositories?q=created:>${todayDate}&sort=stars&order=desc&page=${page}`
        )
        .then((el) => {
          const data = el.data.items;
          console.log(el, "data");
          setRepos(data);
          setLoading(false);
        });
  }, [todayDate, page]);

  return (
    <div>
      <Header />
      <main className="main">
        <Button
          nextPageFn={nextPage}
          prevPageFn={prevPage}
          page={page} />

        {repos && !loading ? (
          <Repo repos={repos} />
        ) : (
          <Loading />
        )}
      </main>
    </div>
  );
}


