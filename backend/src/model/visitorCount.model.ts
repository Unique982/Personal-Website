import mongoose, { mongo } from "mongoose";

const VisitorCountSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
});

export default mongoose.model("VisitCount", VisitorCountSchema);
