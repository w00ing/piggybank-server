const Room = require("./Room");
const User = require("./User");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Member",
    {
      UserId: {
        type: DataTypes.INTEGER,
        reference: {
          model: User,
          key: "id",
        },
      },
      RoomId: {
        type: DataTypes.INTEGER,
        reference: {
          model: Room,
          key: "id",
        },
      },
    },
    { freezeTableName: true, timestamps: true },
  );
};
