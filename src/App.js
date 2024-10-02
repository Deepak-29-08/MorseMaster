import React, { useState } from 'react';
import { Container, TextField, IconButton, CssBaseline, Box, Typography } from '@mui/material';
import { Loop as LoopIcon } from '@mui/icons-material';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

const morseCodeMap = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': '/', '.': '.-.-.-', ',': '--..--',
  '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.',
  ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
  '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-',
  '@': '.--.-.'
};

const toMorseCode = (text) => {
  return text.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
};

const fromMorseCode = (morse) => {
  const reversedMorseCodeMap = Object.keys(morseCodeMap).reduce((acc, key) => {
    acc[morseCodeMap[key]] = key;
    return acc;
  }, {});
  return morse.split(' ').map(code => reversedMorseCodeMap[code] || code).join('');
};

function App() {
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    setMorse(toMorseCode(inputText));
  };

  const handleMorseChange = (e) => {
    const inputMorse = e.target.value;
    setMorse(inputMorse);
    setText(fromMorseCode(inputMorse));
  };

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container className="App" maxWidth="sm">
        <Box mt={4}>
          <Typography variant="h6">Text to Morse Code</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text here"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setText('')} title="Clear text">
                  <LoopIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
        <Box mt={4}>
          <Typography variant="h6">Morse Code to Text</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={morse}
            onChange={handleMorseChange}
            placeholder="Enter Morse code here"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setMorse('')} title="Clear Morse code">
                  <LoopIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
