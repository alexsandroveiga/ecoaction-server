import { Router } from 'express';
import { ConversationService } from './services/ConversationService';
import { CreateSession } from './services/CreateSession';

const router = Router();

router.post('/conversation', async (request, response) => {
  const { text, session_id, assistant_id } = request.body;

  const conversation = new ConversationService();

  try {
    const assistant = await conversation.execute(text, session_id, assistant_id);

    response.json(assistant);
  }
  catch(err) {
    return response.status(500).json(err);
  }
});

router.post('/sessions/:assistant_id/', async (request, response) => {
  const { assistant_id } = request.params;
  
  const createSession = new CreateSession();

  const session = await createSession.execute(assistant_id);

  return response.json(session);
})

export { router }