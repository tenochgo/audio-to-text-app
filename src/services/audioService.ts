class AudioService {
    async convertAudioToText(audioFilePath: string): Promise<string> {
        // Import the speech recognition library
        const speech = require('@google-cloud/speech');
        const client = new speech.SpeechClient();

        // The audio file to transcribe
        const file = audioFilePath;

        // The audio file's encoding and sample rate
        const audio = {
            content: fs.readFileSync(file).toString('base64'),
        };

        const config = {
            encoding: 'LINEAR16',
            sampleRateHertz: 16000,
            languageCode: 'en-US',
        };

        const request = {
            audio: audio,
            config: config,
        };

        // Detects speech in the audio file
        const [response] = await client.recognize(request);
        const transcription = response.results
            .map(result => result.alternatives[0].transcript)
            .join('\n');

        return transcription;
    }
}

export default AudioService;