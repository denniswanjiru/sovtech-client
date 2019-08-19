import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-apollo';

import Nav from './Nav';
import Loader from './Loader';
import Category from './styled/Category';
import capitalize from '../utils/capitalize';
import PageWrapper from './styled/PageWrapper';
import ErrorRenderer from './styled/ErrorRenderer';
import StyledCategories from './styled/StyledCategories';
import CATEGORIES_QUERY from '../queries/CategoriesQuery';
import withAppContext from '../context/withAppContext';

const Categories = (props) => {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);

  useEffect(() => {
    props.context.setLoggedinUser();
  }, []);

  return (
    <Fragment>
      <Nav props={props} />
      {loading && <Loader />}
      {error && <ErrorRenderer>Oops! Something went wrong :(</ErrorRenderer>}
      {data && data.categories && <PageWrapper>
        <h3>All Categories</h3>
        <StyledCategories>
          {data.categories.map(category => (
            <NavLink key={category} to={`jokes/${category}`}>
              <Category>{capitalize(category)}</Category>
            </NavLink>
          ))}
        </StyledCategories>
      </PageWrapper>}
    </Fragment>
  )
}

export default withAppContext(Categories);
