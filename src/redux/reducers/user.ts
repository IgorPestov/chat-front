let initialState: object = {
  user: {
    _id: String,
    name: String,
    firstName: String,
    friendList: Object,
  },
};
export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "USER_POST":
      const { _id, name, firstName, friendList } = payload;
      return { user: { _id, name, firstName, friendList } };
  }
};
