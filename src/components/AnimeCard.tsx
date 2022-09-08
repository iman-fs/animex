import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {TAnime} from '../types';
import TextPrimary from './TextPrimary';
import TextSecondary from './TextSecondary';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 12px;
`;

const DetailsContainer = styled.View`
  flex: 1;
  padding-left: 12px;
`;

const Cover = styled.Image`
  width: 75px;
  height: 115px;
`;

type TProps = {
  data: TAnime;
  onPress: () => void;
};

const AnimeCard: React.FC<TProps> = ({data, onPress}) => {
  const {colors} = useTheme();

  return (
    <Container onPress={onPress}>
      <Cover
        source={{uri: data.images.jpg.image_url}}
        style={{backgroundColor: colors.secondary}}
      />
      <DetailsContainer>
        <TextPrimary>{data.title}</TextPrimary>
        {data.rating && <TextSecondary>{data.rating}</TextSecondary>}
        {data.score && <TextSecondary>Score: {data.score}</TextSecondary>}
        {data.year && <TextSecondary>Year: {data.year}</TextSecondary>}
      </DetailsContainer>
    </Container>
  );
};

export default AnimeCard;
