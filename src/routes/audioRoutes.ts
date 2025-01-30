import { Router } from 'express';
import AudioController from '../controllers/audioController';

const router = Router();
const audioController = new AudioController();

export function setAudioRoutes(app) {
    app.post('/upload', audioController.uploadAudio.bind(audioController));
    app.post('/extract-text', audioController.extractText.bind(audioController));
}

export default router;