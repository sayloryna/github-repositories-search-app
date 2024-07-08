import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Repository } from "../../repositories/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RepositoriesList from "../../repositories/components/RepositoriesList/RepositoriesList";
import { loadRepositoriesActionCreator } from "../../repositories/slice/repositoriesSlice";
import { client } from "../../repositories/client/RepositoriesClient";

const RepositoriesPage = (): React.ReactElement => {
  const { username } = useParams();
  const { repositoryNameFilter, repositoryLanguageFilter } = useAppSelector(
    (state) => state.repositories,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialState: Repository[] = [];
  const [repositories, setRepositories] = useState(initialState);

  useEffect(() => {
    (async () => {
      try {
        const newRepositories = await client.getAllRepos(username!);

        setRepositories(newRepositories);

        const loadRepositories = loadRepositoriesActionCreator(newRepositories);
        dispatch(loadRepositories);
      } catch {
        navigate("/nouser");
      }
    })();
  }, [dispatch, navigate, username]);

  const filteredRepositories = repositories.filter(
    (repository: Repository) =>
      repository.name
        .toLowerCase()
        .includes(repositoryNameFilter.toLowerCase()) &&
      (repository.language ? repository.language.toLowerCase() : "").includes(
        repositoryLanguageFilter.toLowerCase(),
      ),
  );

  return <RepositoriesList repositories={filteredRepositories} />;
};

export default RepositoriesPage;
