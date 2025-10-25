const express = require("express");
const router = express.Router();
const {
  addBalita,
  getBalita,
  updateBalita,
  deleteBalita,
  getBalitaStats,
} = require("../controllers/balitacontroller");

router.get("/stats", getBalitaStats);

// Tambah balita
router.post("/", addBalita);

// Ambil semua balita (opsional filter by id_orangtua)
router.get("/", getBalita);

// Update balita
router.put("/:id_balita", updateBalita);

// Hapus balita
router.delete("/:id_balita", deleteBalita);

module.exports = router;
