import styled, { css } from 'styled-components'
import { LinkedinSquare } from '@styled-icons/boxicons-logos'
import { Instagram } from '@styled-icons/boxicons-logos'

export const Wrapper = styled.div``

export const WrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`

export const ContainerInfo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 67px 0 36px;
  `}
`

export const BoxInfo = styled.div`
  max-width: 38.4rem;

  > img {
    margin-bottom: 1.72rem;
  }
`

export const BoxLinks = styled.div`
  display: flex;
`

export const BoxLinksColumn = styled.div`
  margin-left: 36px;
`

export const BoxLinksText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin: 8px 0;
  `}
`
export const TextBold = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.large};
  `}
`

export const ContainerIcons = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 54px;
    display: flex;
    justify-content: space-between;
    margin-top: 2.55rem;
  `}
`

export const LinkedinIcon = styled(LinkedinSquare)`
  width: 19.82px;
  height: 19.82px;
`

export const InstagramIcon = styled(Instagram)`
  width: 21.62px;
  height: 21.62px;
`

export const ContainerCopyRight = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    padding: 34px 0;
  `}
`

export const CopyBoxFlex = styled.div`
  width: 224.8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
