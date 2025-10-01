export const metadata = {
  title: 'SportsBettingApp',
  description: 'Sports betting demo migrated to Next.js',
};

import '../assets/theme-dark.css';
import '../assets/theme-light.css';
import '../index.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  );
}



