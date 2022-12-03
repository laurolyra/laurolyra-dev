import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';

export const Header: React.FC<PropsWithChildren<React.ReactNode>> = ({ children }) => (
  <>
    <S.HeaderWrapper>
      <S.ImageContainer>
        <Image alt="laurolyra.dev logo" src="/logo_branco.png" fill />
      </S.ImageContainer>
      <S.TitleLinksWrapper>
        <S.Title>
          <h1>Lauro Lyra Aguiar</h1>
          <h2>Software developer</h2>
        </S.Title>
        <S.LinksContainer>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </S.LinksContainer>
      </S.TitleLinksWrapper>
    </S.HeaderWrapper>
    {children}
  </>
);
