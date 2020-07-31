import { assistant } from "../config/assistant";

class ConversationService {
  public async execute(text: string, sessionId: string, assistantId: string) {
    const message = assistant.message({
      assistantId,
      sessionId,
      input: {
        'message_type': 'text',
        text
        }
      })
      .then(res => {  
        return res.result.output.generic?.map(t => t.text);
      })
      .catch(err => {
        throw new Error(err);
      });

    return message;
  }
}

export { ConversationService }