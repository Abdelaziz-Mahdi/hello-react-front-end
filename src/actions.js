export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  payload: greeting,
});

export const fetchGreeting = () => (dispatch) => {
  fetch('http://localhost:3000/random_greeting') // Replace with your backend URL
    .then((response) => response.json())
    .then((data) => {
      dispatch(setGreeting(data.greeting));
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error fetching greeting:', error);
    });
};
