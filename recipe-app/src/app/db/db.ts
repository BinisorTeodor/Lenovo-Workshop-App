import { init, i, id, InstaQLEntity } from "@instantdb/core";
import { environment } from "../../environments/environment";



// ID for app: Lenovo-App
const APP_ID = environment.APP_ID;

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