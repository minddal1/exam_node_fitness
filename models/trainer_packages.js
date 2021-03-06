const { Model } = require("objection");

const Trainer = require("./trainer.js");

class trainer_packages extends Model {
  static tableName = "trainer_packages";

  static relationMappings = {
    trainer_packages: {
      relation: Model.BelongsToOneRelation,
      modelClass: Trainer,
      join: {
        from: "trainer_packages.trainerId",
        to: "trainer.id",
      },
    },
  };
}

module.exports = trainer_packages;
