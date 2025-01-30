# Audio to Text Application

This project is an audio-to-text application that allows users to upload audio files and extract text from them using speech recognition technology.

## Features

- Upload audio files
- Extract text from audio files
- Built with TypeScript and Express

## Project Structure

```
audio-to-text-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers
│   │   └── audioController.ts # Handles audio file uploads and text extraction
│   ├── services
│   │   └── audioService.ts    # Contains methods for audio processing
│   ├── routes
│   │   └── audioRoutes.ts      # Defines routes for audio processing
│   └── types
│       └── index.ts           # Type definitions for audio files and text results
├── package.json               # NPM configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd audio-to-text-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Use a tool like Postman or cURL to send a POST request to upload an audio file:
   ```
   POST /api/audio/upload
   ```
3. To extract text from an uploaded audio file, send a request to:
   ```
   POST /api/audio/extract
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.