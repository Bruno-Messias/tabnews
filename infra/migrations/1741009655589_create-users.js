exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    // For reference, Github limits username to 39 caracteres.
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
    },
    //The maximum length of an email providers is 254 characters.
    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },
    //bcrypt maximum hash length is 72 characters.
    password: {
      type: "varchar(72)",
      notNull: true,
    },
    // TImestamp with timezone
    created_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
    },
    updated_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
    },
  });
};
exports.down = false;
