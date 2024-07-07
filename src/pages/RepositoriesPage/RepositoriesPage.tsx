import React, { useEffect, useState } from "react";
import { Repository } from "../../repositories/types";
import { useAppDispatch } from "../../store/hooks";
import RepositoriesList from "../../repositories/components/RepositoriesList/RepositoriesList";
import { useParams } from "react-router-dom";
import { loadRepositoriesActionCreator } from "../../repositories/slice/repositoriesSlice";
import { notifyError } from "../../notify/notifyError";
import { client } from "../../repositories/client/RepositoriesClient";

const RepositoriesPage = (): React.ReactElement => {
  const { username } = useParams();
  if (!username) {
    notifyError("It doesn't exist");
  }
  const dispatch = useAppDispatch();
  const initialState: Repository[] = [];

  const [repositories, setRepositories] = useState(initialState);

  useEffect(() => {
    (async () => {
      const newRepositories = await client.getAllRepos(username!);

      const loadRepositories = loadRepositoriesActionCreator(newRepositories);
      setRepositories(newRepositories);

      dispatch(loadRepositories);
    })();
  }, [dispatch, username]);

  return <RepositoriesList repositories={repositories} />;
};

export default RepositoriesPage;
