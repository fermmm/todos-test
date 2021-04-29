import * as axios from "axios";

export async function requestUsers() {
  try {
    const result = await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    });

    return result.data.map((user) => ({
      ...user,
      userName: user.username,
      catchPhrase: user.company.catchPhrase,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
