import type { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ paddingBottom: 24 }}>
      Global Layout
      {children}
    </div>
  );
};
