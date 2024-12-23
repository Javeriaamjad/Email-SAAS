
import { db } from "./server/db.js";

await db.user.create({
    data:{
        emailAddress:"test@gmail.com",
        firstName:'elliot',
        lastName:"chong",
        imageUrl: "https://unsplash.com/photos/person-diving-on-pool-splashing-water-1qCSGzVEKKQ"
    }
})