import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  readACat,
  readAllCats,
  updateCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

router.get("/cats", readAllCats);
router.get("/cats/:id", readACat);
router.post("/cats", createCat);
router.put("/cats/:id", updateCat);
router.patch("/cats/:id", updatePartialCat);
router.delete("/cats/:id", deleteCat);

export default router;
