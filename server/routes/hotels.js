import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

export default router;

// Learning Purpose
// //GET ALL
// router.get("/", async (req, res, next) => {
//   const failed = false;
//   // const err = new Error();
//   // err.status = 404;
//   // err.message = "Not Found!!";
//   if (failed) return next(createError(401, "You are not authenticated!!"));

//   try {
//     const hotels = await Hotel.find();
//     res.status(200).json(hotels);
//   } catch (error) {
//     next(error);
//   }
// });
