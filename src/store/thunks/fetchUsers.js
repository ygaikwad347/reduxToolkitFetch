import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await response.json();

  return jsonData;
});

export { fetchUsers };
