// import express from "express";
// import jwt from "jsonwebtoken";
// import { signUpSchema } from "@repo/common/types";
// import "dotenv/config";
// import { middleware } from "./middleware";
// import prisma from "@repo/db/client";
// import bcrypt from "bcrypt";

// const app = express();
// const jwtSecret = process.env.JWT_SECRET || "";

// app.post("/signup", async (req, res) => {
//   const parsedInputData = signUpSchema.safeParse(req.body);

//   if (!parsedInputData.success) {
//     res.json({ message: "Unauthorized" }).status(403);
//     return;
//   }

//   try {
//     const hashedPass = await bcrypt.hash(parsedInputData.data.password, 8);
//     const user = await prisma.user.create({
//       data: {
//         email: parsedInputData.data.email,
//         password: hashedPass,
//         name: parsedInputData.data.username,
//       },
//     });

//     res.json({
//       userId: user.id,
//     });
//   } catch (err) {
//     res.json({
//       message: "User already exists. Try another username!",
//     });
//   }
// });

// app.post("/signin", (req, res) => {
//   //zod validation

//   //db call

//   //jwt token
//   const jwtToken = jwt.sign(
//     {
//       userId: 1,
//     },
//     jwtSecret
//   );
//   //return
//   res.json({
//     id: 1,
//     token: jwtToken,
//   });
// });

// app.post("/room", middleware, (req, res) => {
//   //zod validation
//   //db call
//   //return
//   res.json({
//     roomId: "abc",
//   });
// });

// app.listen(3000, () => {
//   console.log("app is listening to port 3000");
// });
