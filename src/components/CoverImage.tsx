import React from 'react';
import styled, {useTheme} from 'styled-components/native';

const Cover = styled.Image`
  width: 100%;
  height: 600px;
`;

type TProps = {
  uri?: string;
};

const CoverImage: React.FC<TProps> = ({uri}) => {
  const {colors} = useTheme();

  return (
    <Cover
      source={{uri: uri}}
      style={{backgroundColor: colors.secondary}}
      resizeMode="cover"
    />
  );
};

export default CoverImage;
