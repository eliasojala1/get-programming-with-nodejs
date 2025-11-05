const courses = [
  { title: "Event Driven Cakes", cost: 50 },
  { title: "Asynchronous Artichoke", cost: 25 },
  { title: "Object Oriented Orange Juice", cost: 10 }
];

export const showCourses = (req, res) => {
  res.render("courses", { offeredCourses: courses });
};

export const showSignUp = (req, res) => {
  res.render("contact");
};

export const postedSignUpForm = (req, res) => {
  res.render("thanks");
};