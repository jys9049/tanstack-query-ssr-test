export const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/posts");

    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (e) {
    console.error(e);
  }
};

export const getKeyPosts = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/keyPost?id=${id}`);

    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (e) {
    console.error(e);
  }
};
