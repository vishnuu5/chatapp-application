import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "lax", // ✅ Use "lax" for localhost (default is strict; strict can block cross-origin GETs)
    secure: false, // ✅ Must be false in development, or cookie won't be set over HTTP
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
