import { assistant } from "../config/assistant";

class CreateSession {
  public async execute(assistantId: string) {
    const response = assistant.createSession({
      assistantId,
    })
      .then(res => {
        return res.result.session_id;
      })
      .catch(err => {
        throw new Error(err);
      });

    return response;
  }
}

export { CreateSession }