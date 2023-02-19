import { Cat, CatType } from "./cats.model";
import { Request, Response, Router } from "express";

// 왜 분리하는가?
// 가독성과 분리.
// nestjs의 방식이기 때문에

// READ 고양이 전체 데이터 조회
export const readAllCats = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({ success: true, data: cats });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

// READ 특정 고양이 데이터 조회
export const readACat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    const cat = cats.find((c) => c.id === req.params.id);
    res.status(200).send({ success: true, data: cat });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

// CREATE 특정 고양이 데이터 조회
const isCatType = (v: unknown): v is CatType => {
  return true;
};

export const createCat = (req: Request, res: Response) => {
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
};

export const updateCat = (req: Request, res: Response) => {
  try {
    const cat = req.body;

    let result;
    Cat.forEach((c) => {
      if (c.id === req.params.id) {
        c = cat;
        result = c;
      }
    });

    // const cat = cats.find((c) => c.id === req.params.id);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const cat = req.body;
    let result;

    Cat.forEach((c) => {
      if (c.id === req.params.id) {
        c = { ...c, ...cat };
        result = c;
      }
    });

    // const cat = cats.find((c) => c.id === req.params.id);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

export const deleteCat = (req: Request, res: Response) => {
  try {
    const newCat = Cat.filter((c) => c.id !== req.params.id);

    // const cat = cats.find((c) => c.id === req.params.id);
    res.status(200).send({ success: true, data: newCat });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};
