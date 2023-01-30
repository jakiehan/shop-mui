import React from 'react';
import { TitleStyled, ParagraphStyled } from './Description.styled';

type Tag = 'h2' | 'h3';

interface DescriptionProps {
  textTitle: string;
  textDescription: string;
  type?: Tag;
}

export const Description = ({
  textTitle,
  textDescription,
  type = 'h2',
}: DescriptionProps) => {
  const customTag = type;
  const isSubtitle = type === 'h3';

  return (
    <>
      <TitleStyled
        component={customTag}
        isSubtitle={isSubtitle}
      >
        {textTitle}
      </TitleStyled>
      <ParagraphStyled>
        {textDescription}
      </ParagraphStyled>
    </>
  );
};
