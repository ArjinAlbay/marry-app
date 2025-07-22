import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'pink',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  components: {
    Progress: {
      styles: {
        section: {
          transition: 'width 300ms ease',
        },
      },
    },
  },
});
