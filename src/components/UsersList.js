import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import { useEffect } from "react";

function UsersList() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Data is loading....</div>;
  }

  if (error) {
    return <div>Error in fetching data...</div>;
  }

  const renderedList = data.map((el) => {
    return <div key={el.id}>{el.name}</div>;
  });

  return (
    <div>
      <h2>UsersList</h2>
      {renderedList}
    </div>
  );
}

export default UsersList;
