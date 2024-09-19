import { ItemProvider } from './context/itemContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ItemProvider>{children}</ItemProvider>
      </body>
    </html>
  );
}