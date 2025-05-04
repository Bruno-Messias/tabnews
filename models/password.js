import bcryptjs from "bcryptjs";

export async function hash(password) {
  const rounds = getNumberOfRounds();
  return await bcryptjs.hash(password, rounds);
}

function getNumberOfRounds() {
  return process.env.NODE_ENV === "production" ? 14 : 1;
}

export async function compare(password, hashedPassword) {
  return await bcryptjs.compare(password, hashedPassword);
}

const password = {
  hash,
  compare,
};

export default password;
