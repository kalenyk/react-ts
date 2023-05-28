import React, { useCallback, useEffect, useState } from "react";
import usersApi from "../../api/users";
import Title from "../../components/Title";
import { Heading1Bold } from "../../design-system/typography";
import { PageWrapper } from "../../design-system/utils";
import User from "../../types/User";
import {
  UserGrid,
  Divider,
  EmptyGridMessage,
  FilterWrapper,
  HeadingWrapper,
  GridWrapper,
} from "./style";
import Loader from "../../components/Loader";
import LabeledField from "../../types/LabeledField";
import UserRowData from "./UserRowData";
import SearchField from "../../components/SearchField";
import { gridTitles } from "./constants";
import { useDebounce } from "../../hooks/useDebounce";
function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchWord, setSearchWord] = useState<string>("");
  const [isError, setError] = useState<boolean>(false);

  const fetchUsersList = useCallback(async (q: string) => {
    try {
      const response = await usersApi.listUsers({ q });
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedFetchUsersList = useDebounce((query: string) => {
    //prevent sending too many requests (every time on button click)
    fetchUsersList(query);
  }, 1000);

  useEffect(() => {
    debouncedFetchUsersList(searchWord);
  }, [searchWord]);

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  const getGrid = () => {
    if (users.length === 0) {
      return (
        <EmptyGridMessage>No users match the selected filter.</EmptyGridMessage>
      );
    }

    const getGridTitle = (gridTitle: LabeledField) => {
      return <Title title={gridTitle.label} key={gridTitle.field} />;
    };

    return (
      <UserGrid>
        {gridTitles.map((gridTitle) => getGridTitle(gridTitle))}

        {users.map((user: User) => (
          <React.Fragment key={user.email}>
            <UserRowData user={user} />
            <Divider />
          </React.Fragment>
        ))}
      </UserGrid>
    );
  };

  return (
    <PageWrapper>
      <HeadingWrapper>
        <Heading1Bold>Users</Heading1Bold>
        <FilterWrapper>
          <SearchField placeholder="Search user" onSearch={setSearchWord} />
        </FilterWrapper>
      </HeadingWrapper>
      <GridWrapper id="userGrid">{getGrid()}</GridWrapper>
    </PageWrapper>
  );
}

export default UserList;
