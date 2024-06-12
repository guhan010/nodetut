const express = require("express");
const MobileData = require("../Data.js");

const router = express.Router();

// router.get("/mobiles", (req, res) => {
//   res.send("samsung mobiles");
// });
// router.get("/s22", (req, res) => {
//   res.send("samsung s22 details");
// });

router.get("/", async (req, res) => {
  try {
    const mobiles = await MobileData.find();
    res.json(mobiles);
  } catch (error) {
    res.send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const mobiles = await MobileData.findById(req.params.id);
    res.json(mobiles);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  const newMob = new MobileData(req.body);
  try {
    const saved = await newMob.save();
    res.json(saved);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await MobileData.findByIdAndDelete(req.params.id);
    res.send("item deleted");
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  const content = req.body;
  try {
    const updated = await MobileData.findByIdAndUpdate(req.params.id, content, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
