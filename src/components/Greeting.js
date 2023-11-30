import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

Greeting.propTypes = {
  fetchGreeting: PropTypes.func.isRequired,
  greeting: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGreeting: () => dispatch(fetchGreeting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
