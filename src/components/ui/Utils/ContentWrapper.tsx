import React from 'react';

type Props = {
  children: React.ReactNode;
};

//コンテンツ全体の幅を制御するコンテナ(各ページで利用する)
const ContentWrapper: React.FC<Props> = ({ children }) => {
  return <main className="mx-auto mt-16 px-6 w-11/12 max-w-3xl">{children}</main>;
};

export default ContentWrapper;
