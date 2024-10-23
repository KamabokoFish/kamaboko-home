import Header from '@components/ui/Header/Header';
import 'styles/globals.scss';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import ContentWrapper from '@components/ui/Utils/ContentWrapper';

const mplus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={mplus.className}>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
      </body>
    </html>
  );
}
