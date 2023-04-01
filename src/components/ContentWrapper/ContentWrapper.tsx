import { contentWrapperStyle } from '@/styles/contentWrapperStyle';
import React, { FC } from 'react';

interface IContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: FC<IContentWrapperProps> = ({ children }) => {
  return <div className={contentWrapperStyle.wrapper}>{children}</div>;
};

export default ContentWrapper;
