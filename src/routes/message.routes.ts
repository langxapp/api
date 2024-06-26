import { Router } from "express";
import MessageController from "../controllers/message.controller";

class MessageRoutes {
  router = Router();
  controller = new MessageController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.post("/", this.controller.create);
    this.router.put("/:id", this.controller.update);
    this.router.delete("/:id", this.controller.delete);
    this.router.patch("/:id", this.controller.update); // TODO: Deprecated! Remove this line in the future.
  }
}

export default new MessageRoutes().router;
