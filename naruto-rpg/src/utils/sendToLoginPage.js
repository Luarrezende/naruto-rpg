const sendToLoginPage = (history) => {
  const name = JSON.parse(localStorage.getItem('user'));
  if (name === null || name.name.length < 1) {
    history.push('/')
  }
};

export default sendToLoginPage;