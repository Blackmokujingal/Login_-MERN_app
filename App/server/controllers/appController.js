import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";

/** POST: http://localhost:8000/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;

    // check the existing user
    const existUsername = await UserModel.findOne({ username });
    if (existUsername) {
      return res.status(400).send({ error: "Please use a unique username" });
    }

    // check for existing email
    const existEmail = await UserModel.findOne({ email });
    if (existEmail) {
      return res.status(400).send({ error: "Please use a unique email" });
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({
        username,
        password: hashedPassword,
        profile: profile || "",
        email,
      });

      // return save result as a response
      const result = await user.save();
      return res.status(201).send({ msg: "User Registered Successfully" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Unable to register user" });
  }
}

/** POST: http://localhost:8080/api/login */
export async function login(req, res) {
  res.json("login route");
}

/** GET: http://localhost:8080/api/user */
export async function getUser(req, res) {
  res.json("getUser route");
}

/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export async function updateUser(req, res) {
  res.json("updateUser route");
}

/** GET: http://localhost:8080/api/generateOTP */
export async function generateOTP(req, res) {
  res.json("generateOTP route");
}

/** GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}

/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res) {
  res.json("createResetSession route");
}

/** PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
