export const fetchGreeting = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/random_greeting') // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => {
        dispatch(setGreeting(data.greeting));
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching greeting:', error);
      });
  };
};

export const setGreeting = (greeting) => {
  console.log('greeting', greeting);
  return {
    type: 'SET_GREETING',
    payload: greeting,
  };
};
