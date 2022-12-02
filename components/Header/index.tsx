import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import * as S from './styles'

export const Header = () => (
  <S.HeaderWrapper>
    <S.ImageContainer>
      <Image alt="laurolyra.dev logo" src="/logo.png" fill />
    </S.ImageContainer>
    <S.TitleLinksWrapper>
      <S.Title>
        <h1>Lauro Lyra Aguiar</h1>
      </S.Title>
      <S.LinksContainer>
        <Link href="/">Bio</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact</Link>
      </S.LinksContainer>
    </S.TitleLinksWrapper>
  </S.HeaderWrapper>
)
