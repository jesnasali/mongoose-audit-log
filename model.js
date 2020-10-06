const mongoose = require("mongoose");
const { Schema } = mongoose;

const auditLogSchema = new Schema(
  {
    collectionName: String,
    collectionId: Schema.Types.ObjectId,
    method: String,
    diff: {},
    user: {},
    reason: String,
    version: { type: Number, min: 0 }
  },
  {
    timestamps: true
  }
);

module.exports = { model: mongoose.model("AuditLog", auditLogSchema) };
