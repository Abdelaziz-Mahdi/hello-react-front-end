import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions';

function Greeting({ greeting, fetchGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGreeting: () => dispatch(fetchGreeting()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
