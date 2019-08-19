import React, { Fragment, useEffect } from 'react';
import { useQuery } from 'react-apollo';

import Nav from './Nav';
import Loader from './Loader';
import Button from './styled/Button';
import back from '../assets/back.svg';
import JOKE_QUERY from '../queries/JokeQuery';
import PageWrapper from './styled/PageWrapper';
import JokeWrapper from './styled/JokeWrapper';
import JokeRenderer from './styled/JokeRenderer';
import ErrorRenderer from './styled/ErrorRenderer';
import withAppContext from '../context/withAppContext';

const Joke = (props) => {
  const { category } = props.match.params;
  const { loading, error, data, refetch, networkStatus } = useQuery(JOKE_QUERY, {
    variables: { category },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    props.context.setLoggedinUser();
  }, []);

  const refeching = networkStatus === 4;
  const goBack = (e) => {
    e.preventDefault();
    props.history.goBack();
  }

  return (
    <Fragment>
      <Nav props={props} />
      {(loading || refeching) && <Loader />}
      {error && <ErrorRenderer>Oops! Something went wrong :(</ErrorRenderer>}
      {data && data.joke && <PageWrapper>
        <JokeWrapper>
          <img src={back} onClick={goBack} alt="back"/>
          <JokeRenderer>
              <p>{data.joke.value}</p>
            <Button width="200px" onClick={() => refetch()}>
              See another {category} joke
            </Button>
          </JokeRenderer>
        </JokeWrapper>
      </PageWrapper>}
    </Fragment>
  )
}

export default withAppContext(Joke);