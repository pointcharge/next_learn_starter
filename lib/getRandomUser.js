import fetch from "node-fetch";

export async function getRandomUser() {
  const url = "https://randomuser.me/api";

  const res = await fetch(url);
  const randomUser = await res.json();

  return {
    name:
      randomUser.results[0].name.title +
      " " +
      randomUser.results[0].name.first +
      " " +
      randomUser.results[0].name.last,
    profilePicture: randomUser.results[0].picture.large,
  };
}
