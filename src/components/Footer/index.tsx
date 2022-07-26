import Image from 'next/image'
import * as S from './styles'

import logoWhite from '../../../public/img/logo-white.png'
import brasil from '../../../public/img/brasil.png'

const Footer = () => (
  <S.Wrapper>
    <S.ContainerInfo>
      <S.Container>
        <S.WrapperFlex>
          <S.BoxInfo>
            <Image src={logoWhite} />
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit id
              consequat dignissim metus. Mi et aenean quam lacus, enim nunc.
              Enim pellentesque interdum dui, integer bibendum at id. Sed nisi,
              enim, eleifend duis arcu, orci nisl massa.
            </S.Text>
            <S.ContainerIcons>
              <S.LinkedinIcon />
              <S.InstagramIcon />
            </S.ContainerIcons>
          </S.BoxInfo>
          <S.BoxLinks>
            <S.BoxLinksColumn>
              <S.TextBold>Conheça</S.TextBold>
              <S.BoxLinksText>Quem somos</S.BoxLinksText>
              <S.BoxLinksText>Trabalhe conosco</S.BoxLinksText>
              <S.BoxLinksText>Seja um parceiro</S.BoxLinksText>
            </S.BoxLinksColumn>
            <S.BoxLinksColumn>
              <S.TextBold>Viaje</S.TextBold>
              <S.BoxLinksText>Pacotes</S.BoxLinksText>
              <S.BoxLinksText>Passagens</S.BoxLinksText>
              <S.BoxLinksText>Hotéis</S.BoxLinksText>
            </S.BoxLinksColumn>
            <S.BoxLinksColumn>
              <S.TextBold>Fale consoco</S.TextBold>
              <S.BoxLinksText>Central de Ajuda</S.BoxLinksText>
              <S.BoxLinksText>Política de privacidade</S.BoxLinksText>
              <S.BoxLinksText>Política de cookies</S.BoxLinksText>
              <S.BoxLinksText>Termos de uso</S.BoxLinksText>
            </S.BoxLinksColumn>
          </S.BoxLinks>
        </S.WrapperFlex>
      </S.Container>
    </S.ContainerInfo>

    <S.ContainerCopyRight>
      <S.Container>
        <S.WrapperFlex>
          <S.Text>
            Copyright 2021 | Just Travel Tech. All Rights Reserved.
          </S.Text>
          <S.CopyBoxFlex>
            <S.Text>Engineering made in Brazil</S.Text>
            <Image src={brasil} />
          </S.CopyBoxFlex>
        </S.WrapperFlex>
      </S.Container>
    </S.ContainerCopyRight>
  </S.Wrapper>
)

export default Footer
