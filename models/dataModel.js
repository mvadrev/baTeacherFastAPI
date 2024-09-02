const mongoose = require("mongoose");

const dataModelSchema = new mongoose.Schema({
  experimentDetails: {
    fullName: String,
    email: String,
    phone: String,
    joinDate: Date,
    totalExperiments: Number,
  },
  tests: [
    {
      testID: Number,
      testDate: String,
      package: String,
      sampleID: Number,
      cycles: Number,
      vstp_chg: Number,
      vs_min: Number,
      lvdc: Number,
      ich: Number,
      ild: Number,
      ratedCapacity: Number,
      batteryType: String,
      timeSeriesData: [
        {
          timestamp: Date,
          value: Number,
        },
      ],
    },
  ],
});

const dataModel = mongoose.model("dataModel", dataModelSchema);

module.exports = dataModel;
