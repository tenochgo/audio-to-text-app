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
class DogNameGenerator {
    private dogNames: string[] = ["Buddy", "Bella", "Charlie", "Max", "Lucy", "Molly", "Daisy", "Bailey", "Lola", "Sadie"];

    generateRandomName(): string {
        const randomIndex = Math.floor(Math.random() * this.dogNames.length);
        return this.dogNames[randomIndex];
    }
}


export default AudioController;