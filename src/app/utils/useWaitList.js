export const addToWaitList = (movieDetails) => {
  const waitList = localStorage.getItem("waitList");
  const waitListArray = JSON.parse(waitList) || [];

  // check is exists
  if (!waitListArray.some((item) => item.id === movieDetails.id)) {
    waitListArray.push(movieDetails);
    const waitListString = JSON.stringify(waitListArray);
    localStorage.setItem("waitList", waitListString);
  }
};

export const checkIsInWaitList = (movieDetails) => {
  const waitList = localStorage.getItem("waitList");
  const waitListArray = JSON.parse(waitList) || [];

  return waitListArray.some((item) => item.id === movieDetails.id);
};

export const removeFromWaitList = (movieDetails) => {
  const waitList = localStorage.getItem("waitList");
  const waitListArray = JSON.parse(waitList) || [];

  const index = waitListArray.findIndex((item) => item.id === movieDetails.id);

  if (index !== -1) {
    waitListArray.splice(index, 1);
    const waitListString = JSON.stringify(waitListArray);
    localStorage.setItem("waitList", waitListString);
  }
};

export const getAllWaitList = () => {
  const waitList = localStorage.getItem("waitList");
  const waitListArray = JSON.parse(waitList) || [];
  return waitListArray;
};
