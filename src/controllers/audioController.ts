class AudioController {
    uploadAudio(req, res) {
        // Handle file upload logic here
        res.send("Audio file uploaded successfully.");
    }

    extractText(req, res) {
        // Handle audio file processing and text extraction logic here
        res.send("Text extracted from audio file.");
    }
}

export default AudioController;