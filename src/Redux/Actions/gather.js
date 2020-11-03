import axios from "axios";
import { URI } from "../../const";
export const newGatherCollection = (data) => async (dispatch) => {
  dispatch({
    type: "newGatherCollectionLoading",
  });
  await axios
    .post(URI.gather.newCollection, {
      time_gatheried: data.time_gatheried,
      gatheried: data.gatheried,
    })
    .then((response) => {
      if (response.status === 201) {
        console.log(response);
        dispatch({
          type: "newGatherCollectionSuccess",
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: "newGatherCollectionError",
        payload: err,
      });
    });
};

export const getCollections = () => async (dispatch) => {
  dispatch({
    type: "getAllCollections",
  });
  await axios
    .get(URI.gather.getAllCollections, {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAzNjgxNTcyLCJqdGkiOiJmYTBmMjE4MTk0ZTE0YmRiODcwMGYyZTkxN2QxMjkxZCIsInVzZXJfaWQiOjR9.qc3Iz3Rpdb6FEdg-9OdC58jSnTJ6Qf2CyEO2fgYCLIg",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "getAllCollectionsSuccess",
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: "getAllCollectionsError",
        payload: err,
      });
    });
};

export const getCollectionById = (id) => async (dispatch) => {
  dispatch({
    type: "getCollectionByIdLoading",
  });
  await axios
    .get(URI.gather.getCollectionById + id)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "getCollectionByIdSuccess",
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: "getCollectionByIdError",
        payload: err,
      });
    });
};

export const updateCollection = (data, id) => async (dispatch) => {
  dispatch({
    type: "updateCollectionLoading",
  });
  await axios
    .put(URI.gather.updateCollection + id, {
      update_for: data,
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "updateCollectionSuccess",
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: "updateCollectionError",
        paylaod: err,
      });
    });
};

export const deleteCollection = (id) => async (dispatch) => {
  dispatch({
    type: "deleteCollectionLoading",
  });
  await axios
    .delete(URI.gather.deleteCollection + id)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "deleteCollectionSuccess",
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: "deleteCollectionError",
        payload: err,
      });
    });
};
