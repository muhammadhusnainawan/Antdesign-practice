import React, { useEffect, useState } from "react";

export function useCards() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setData(await response.json());
    setLoading(false)
  };
  useEffect(() => {
    getData();
  }, []);
  return [data, isLoading];
}
