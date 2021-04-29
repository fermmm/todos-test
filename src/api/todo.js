import * as axios from "axios";

export async function requestTodo(userId) {
  try {
    const result = await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos?userId=" + userId,
    });

    return result.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
