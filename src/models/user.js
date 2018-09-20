import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const { SALT_ROUNDS } = process.env;

const UserSchema = new Schema({
  email: {
    type: Schema.Types.String,
    unique: true,
    required: [true, "You must provide an email address"],
    validate: {
      validator: value => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value),
      message: "You must provide a valid email address"
    }
  },
  firstName: {
    type: Schema.Types.String,
    required: [true, "You must provide your first name"]
  },
  lastName: {
    type: Schema.Types.String,
    required: [true, "You must provide your last name"]
  },
  password: {
    type: Schema.Types.String,
    required: [true, "You must provide your password"]
  }
});

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(~~SALT_ROUNDS);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", UserSchema, "Users");
