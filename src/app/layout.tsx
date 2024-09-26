
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Test',
  description: 'A sample website using MUI and Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
