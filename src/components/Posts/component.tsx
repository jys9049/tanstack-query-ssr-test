"use client";

import { IGetPostResponse } from "@/const/const";
import { getKeyPosts, getPosts } from "@/services/posts";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const component = () => {
  const [id, setId] = useState("1");

  const handleIdChange = (id: string) => {
    console.log(id);
    setId(id);
  };

  const { data } = useQuery<IGetPostResponse[]>({
    queryKey: ["posts"],
    queryFn: async () => await getPosts(),
  });

  const { data: keyPostData } = useQuery<IGetPostResponse>({
    queryKey: ["keyPost", id],
    queryFn: async () => await getKeyPosts(id),
  });

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <>
      <div>
        {data &&
          data.map((item) => (
            <div style={{ display: "flex" }} key={item.id}>
              <div>{item.title}</div>
              <button onClick={() => handleIdChange(item.id)}>{item.id}</button>
            </div>
          ))}
      </div>
      <p>ID</p>
      <div>{keyPostData && keyPostData.title}</div>
    </>
  );
};

export default component;
