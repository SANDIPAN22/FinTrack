const passport = require("passport");
const bcrypt = require("bcryptjs");

const { userModel } = require("../models/user.model");
const { GraphQLLocalStrategy } = require("graphql-passport");

exports.configurePassport = async () => {
  // step 1
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  // step 2
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      return done(null, user);
    } catch (err) {
      console.error("Error while de-serializing the user", err);
      return done(err, null);
    }
  });

  // step 3 (login strategy)
  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = await userModel.findOne({
          username: username,
        });

        if (!user) {
          console.log("Unsuccessful login");
          return done(null, false, { message: "Invalid credentials" });
        }
        if (!(await bcrypt.compare(password, user.password))) {
          console.log("Unsuccessful login");
          return done(null, false, { message: "Invalid credentials" });
        }
        return done(null, user);
      } catch (err) {
        console.error("Error while logging you in :: ", err);
        return done(err);
      }
    })
  );
};
