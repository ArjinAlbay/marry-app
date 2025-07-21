import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import BottomNavigation from '../components/BottomNavigation';

export const metadata = {
  title: 'MarryApp - Evlilik Sürecinde Yanınızda',
  description: 'Evlilik hazırlığınızda ihtiyacınız olan tüm hizmetler tek uygulamada',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        background: '#f8f9fa',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <MantineProvider defaultColorScheme="light">
          <div style={{ 
            minHeight: '100vh', 
            paddingBottom: '85px',
            maxWidth: '430px',
            margin: '0 auto',
            background: 'white',
            boxShadow: '0 0 30px rgba(0,0,0,0.1)',
            position: 'relative'
          }}>
            {children}
            <BottomNavigation />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}