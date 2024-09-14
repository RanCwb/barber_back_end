import { Request, Response } from "express";
import CreateUserService from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const service = new CreateUserService();

    const result = await service.execute({ name, email, password });

    return res.json(result);
  }
}

export { CreateUserController };
