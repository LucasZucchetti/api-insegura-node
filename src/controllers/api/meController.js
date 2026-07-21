import MeService from "../../services/meService.js";
import { success } from "../../utils/response.js";

class MeController {
  async uploadAvatar(req, res, next) {
    try {
      const result = await MeService.uploadAvatar(req.user.id, req.file);

      return res.json(success(result, "Avatar atualizado com sucesso."));
    } catch (err) {
      next(err);
    }
  }
}

export default new MeController();
