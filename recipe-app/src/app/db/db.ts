import { init, i, id, InstaQLEntity } from "@instantdb/core";



// ID for app: Lenovo-App
const APP_ID = "37dc3a49-3351-4bb7-abd3-63baf686d5e0";

// Optional: Declare your schema!
const schema = i.schema({
  entities: {
    recipes: i.entity({
      id: i.string(),
      name: i.string(),
      image: i.string(),
      difficulty: i.string(),
      prepTimeMinutes: i.number(),
    }),
  },
});


const db = init({ appId: APP_ID, schema });

export {db,schema};