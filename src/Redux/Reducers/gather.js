const initialState = {
  collections: {
    loading: false,
    error: {},
    data: [],
  },
  collection: {
    loading: false,
    error: {},
    data: {},
  },
};

export const GatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "newGatherCollectionLoading":
      return {
        ...state,
        collection: {
          loading: true,
          error: {},
          data: {},
        },
      };
    case "newGatherCollectionSuccess":
      return {
        ...state,
        collection: {
          loading: false,
          error: {},
          data: action.payload,
        },
      };
    case "newGatherCollectionError":
      return {
        ...state,
        collection: {
          loading: false,
          error: {
            message: action.payload,
          },
          data: [],
        },
      };
    case "getAllCollectionsLoading":
      return {
        ...state,
        collections: {
          loading: true,
          error: {},
          data: [],
        },
      };
    case "getAllCollectionsSuccess":
      return {
        ...state,
        collections: {
          loading: false,
          error: {},
          data: action.payload,
        },
      };
    case "getAllCollectionsError":
      return {
        ...state,
        collections: {
          loading: false,
          error: {
            message: action.payload,
          },
          data: [],
        },
      };
    default:
      return state;
  }
};
