import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Repository } from "../../repositories/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import RepositoriesList from "../../repositories/components/RepositoriesList/RepositoriesList";
import { loadRepositoriesActionCreator } from "../../repositories/slice/repositoriesSlice";
import { client } from "../../repositories/client/RepositoriesClient";
import { hideLoading, showLoading } from "../../ui/uiSlice/actions";
import Loading from "../../components/Loading/Loading";

const RepositoriesPage = (): React.ReactElement => {
  const { username } = useParams();
  const { isLoading } = useAppSelector((state) => state.ui);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { repositoryNameFilter, repositoryLanguageFilter } = useAppSelector(
    (state) => state.repositories,
  );

  const initialState: Repository[] = [];
  const [repositories, setRepositories] = useState(initialState);

  useEffect(() => {
    (async () => {
      try {
        dispatch(showLoading);

        const newRepositories = await client.getAllRepos(username!);

        setRepositories(newRepositories);

        const loadRepositories = loadRepositoriesActionCreator(newRepositories);

        dispatch(loadRepositories);
        dispatch(hideLoading);
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

  if (isLoading) {
    return <Loading />;
  }

  return <RepositoriesList repositories={filteredRepositories} />;
};

export default RepositoriesPage;
