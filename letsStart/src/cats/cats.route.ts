import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router();

// READ 고양이 전체 데이터 조회
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({ success: true, data: cats });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// READ 특정 고양이 데이터 조회
router.get("/cats/:id", (req, res) => {
  try {
    const cats = Cat;
    const cat = cats.find((c) => c.id === req.params.id);
    res.status(200).send({ success: true, data: cat });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// CREATE 특정 고양이 데이터 조회
const isCatType = (v: unknown): v is CatType => {
  return true;
};

router.post("/cats", (req, res) => {
  try {
    const cat = req.body;
    if (isCatType(cat) === false) {
      return;
    }
    Cat.push(cat);

    // const cat = cats.find((c) => c.id === req.params.id);
    res.status(200).send({ success: true, data: cat });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

export default router;
