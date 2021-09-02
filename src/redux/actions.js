export const login = (username, password) => {
  console.log(username + password + "test");
  return {
    type: "LOGIN",
    value: {
      username,
      password,
    },
  };
};

export const logout = () => {
  return { type: "LOGOUT", value: false };
};

export const addListing = listing => {
  return {
    type: "ADD_LISTING",
    value: listing
  }
}

export const removeListing = index => {
  return {
    type: "REMOVE_LISTING",
    value: index
  }
}