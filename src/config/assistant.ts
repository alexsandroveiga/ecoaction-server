import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

export const assistant = new AssistantV2({
  version: '2020-07-31',
  authenticator: new IamAuthenticator({
    apikey: process.env.IBM_APIKEY || '',
  }),
  url: process.env.IBM_URL,    
});