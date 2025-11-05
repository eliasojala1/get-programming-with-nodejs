"use strict";

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import layouts from "express-ejs-layouts";
import * as homeController from "./controllers/homeController.js";
import * as errorController from "./controllers/errorController.js";
import * as subscribersController from "./controllers/subscribersController.js";
import helmet from "helmet";

const app = express();
app.use(helmet());

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected!"))
.catch(err => console.error("MongoDB connection error:", err));

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 4000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => res.render("index"));

app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.get("/courses", homeController.showCourses);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
