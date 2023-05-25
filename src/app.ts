import { db } from "./db/db";
import { UserSchema } from "./db/schema/user.schema";

const runQuery = async () => {
  //   const result = await db.insert(UserSchema).values({
  //     name: "drizzle2",
  //     email: "info2@drizzle.team",
  //     password: "123456",
  //   });
  //   console.log(JSON.stringify(result, null, 2));

  const result = await db.select().from(UserSchema);
  console.log(JSON.stringify(result, null, 2));
};
runQuery();
