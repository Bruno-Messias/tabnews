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
    //bcrypt maximum hash length is 60 characters.
    password: {
      type: "varchar(60)",
      notNull: true,
    },
    // TImestamp with timezone
    created_at: {
      type: "timestamptz",
      default: pgm.func("timezone('utc', now())"),
      notNull: true,
    },
    updated_at: {
      type: "timestamptz",
      default: pgm.func("timezone('utc', now())"),
      notNull: true,
    },
  });
};
exports.down = false;
