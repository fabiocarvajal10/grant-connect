import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e3f2fd', // Lightest
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5', // Light
      500: '#2196f3', // Default Brand Color
      600: '#1e88e5',
      700: '#1976d2', // Dark
      800: '#1565c0',
      900: '#0d47a1', // Darkest
    },
    ai: {
      text: '#4fd1c5', // Text color inspired by AI themes
      highlight: '#81E6D9', // Highlight color for important UI elements
      background: '#1A202C', // Dark background for contrast
      accent: '#FFC107', // Accent color for buttons or interactive elements
    },
  },
  fonts: {
    heading: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif',
    mono: '"Roboto Mono", monospace',
  },
  components: {
    Button: {
      baseStyle: ({ colorMode }: { colorMode: string }) => ({
        fontWeight: 'bold',
        color: colorMode === 'dark' ? 'ai.text' : 'ai.background',
        bg: colorMode === 'dark' ? 'ai.highlight' : 'ai.text',
        _hover: {
          bg: 'ai.accent',
        },
      }),
    },
    Text: {
      baseStyle: ({ colorMode }: { colorMode: string }) => ({
        color: colorMode === 'dark' ? 'ai.text' : 'ai.background',
        fontSize: 'md',
      }),
    },
  },
});

export default theme;