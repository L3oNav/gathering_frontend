const BASE_URI = "http://127.0.0.1:8000/";

export const URI = {
  auth: {
    login: BASE_URI + "token/", // ! Login
    signup: BASE_URI + "signup", // ! SignUp
    refresh: BASE_URI + "token/refresh/", // ! Refresh Token when expired
  },

  gather: {
    newCollection: BASE_URI + "gather/new", // ! Create
    getCollectionById: BASE_URI + "gather/list", // ! Read
    getAllCollections: BASE_URI + "gather/all", // ! Read
    updateCollection: BASE_URI + "gather/update/", // ! Update
    deleteCollection: BASE_URI + "gather/delete/", // ! Delete
  },
};

export const Mocks = {
  gather: [
    {
      tier: "T1",
      material: [
        {
          enchant: ".0",
          value: 0,
        },
      ],
      prices: [
        {
          enchant: ".0",
          value: 0,
        },
      ],
    },
    {
      tier: "T2",
      material: [
        {
          enchant: ".0",
          value: 0,
        },
      ],
      prices: [
        {
          enchant: ".0",
          value: 0,
        },
      ],
    },
    {
      tier: "T3",
      material: [
        {
          enchant: ".0",
          value: 0,
        },
      ],
      prices: [
        {
          enchant: ".0",
          value: 0,
        },
      ],
    },
    {
      tier: "T4",
      material: [
        {
          enchant: ".0",
          value: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
      prices: [
        {
          enchant: ".0",
          value: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
    },
    {
      tier: "T5",
      material: [
        {
          enchant: ".0",
          value: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
      prices: [
        {
          enchant: ".0",
          value: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
    },
    {
      tier: "T6",
      material: [
        {
          enchant: ".0",
          value: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
      prices: [
        {
          enchant: ".0",
          value: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
    },
    {
      tier: "T7",
      material: [
        {
          enchant: ".0",
          value: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
      prices: [
        {
          enchant: ".0",
          value: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
    },
    {
      tier: "T8",
      material: [
        {
          enchant: ".0",
          valmue: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
      prices: [
        {
          enchant: ".0",
          value: 0,
        },
        {
          enchant: ".1",
          value: 0,
        },
        {
          enchant: ".2",
          value: 0,
        },
        {
          enchant: ".3",
          value: 0,
        },
      ],
    },
  ],
};
