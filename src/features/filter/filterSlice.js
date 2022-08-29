const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    authorTag: "",
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    setAuthorTag: (state, action) => {
      state.authorTag = action.payload;
      state.tags = [];
      state.search = "";
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, setAuthorTag } = filterSlice.actions;
