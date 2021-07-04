import { Request, Response } from "express";
import { CreateUsersService } from "../services/CreateUsersService";

class CreateUsersController {
    async handle(req: Request, res: Response) {
        const {name, email, admin} = req.body;

        const createUsersService = new CreateUsersService();

        const user = await createUsersService.execute({name, email, admin});

        return res.json(user);
    }
}

export { CreateUsersController };