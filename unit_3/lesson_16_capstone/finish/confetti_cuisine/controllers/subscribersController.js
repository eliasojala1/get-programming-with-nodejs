import { Subscriber } from "../models/subscriber.js";

export const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({});
    res.render("subscribers", { subscribers });
  } catch (err) {
    console.error(err);
    res.render("error", { message: "Could not fetch subscribers." });
  }
};

export const getSubscriptionPage = (req, res) => {
  res.render("contact");
};

export const saveSubscriber = async (req, res) => {
  try {
    const { name, email, zipCode, streetAddress, vip } = req.body;

    const newSubscriber = new Subscriber({
      name,
      email,
      zipCode,
      streetAddress,
      vip: vip === "on" || vip === true
    });

    await newSubscriber.save();

    res.render("thanks", { subscriber: newSubscriber });
  } catch (err) {
    console.error(err);
    res.render("error", { message: "Could not save subscriber." });
  }
};
