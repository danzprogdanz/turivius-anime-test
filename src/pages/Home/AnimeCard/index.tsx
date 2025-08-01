import React, { useEffect, useState } from 'react';
import type { AnimeCardProps } from './types';
import { CardBadge, CardContainer, CardContent, CardImage, CardMeta, CardSynopsis, CardTitle } from './styled';
import LoadingSpinner from '../../../components/common/icons/LoadingSpinner';


export const AnimeCard: React.FC<AnimeCardProps> = ({
  anime,
  variant = 'default',
  onFetchAnime
}) => {

  const { attributes } = anime;
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [imageUrl, setImageUrl] = useState(attributes?.coverImage?.original || attributes?.coverImage?.tiny || attributes?.coverImage?.large || attributes?.coverImage?.small);

  const handleSelectAnime = () => {
    onFetchAnime(anime.id);
  };

  useEffect(() => {
    const img = new Image();
    img.src = attributes?.coverImage?.original || attributes?.coverImage?.tiny || attributes?.coverImage?.large || attributes?.coverImage?.small;

    img.onload = () => {
      setImageStatus('loaded');
    };

    img.onerror = () => {
      setImageStatus('error');
      // Você pode definir uma imagem de fallback aqui se quiser
      setImageUrl('https://via.placeholder.com/300x450?text=Anime+Image+Not+Available');
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [attributes?.coverImage?.original]);

  return (
    <CardContainer $variant={variant}>
      <CardImage
        $imageUrl={imageUrl}
        onClick={handleSelectAnime}
        data-status={imageStatus} // Adicione um atributo para estilização condicional
      >
        {imageStatus === 'loading' && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white'
          }}>
            <LoadingSpinner/>
          </div>
        )}

        {imageStatus === 'error' && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            Imagem não disponível
          </div>
        )}

        <CardBadge $status={attributes?.status}>
          {status === 'ongoing' ? 'ONGOING' :
            status === 'completed' ? 'COMPLETED' : 'UPCOMING'}
        </CardBadge>
      </CardImage>

      <CardContent>
        <CardTitle>{attributes?.titles?.en || attributes?.titles?.en_jp}</CardTitle>

        {variant !== 'compact' && (
          <>
            <CardSynopsis>{attributes?.synopsis}</CardSynopsis>
            {/* <GenreList>
              {genre.slice(0, 3).map((g, index) => (
                <GenreTag key={index}>{g}</GenreTag>
              ))}
              {genre.length > 3 && <GenreTag>+{genre.length - 3}</GenreTag>}
            </GenreList> */}
          </>
        )}

        <CardMeta>
          {/* <Rating>
            {rating.toFixed(1)}
          </Rating>
          <Episodes>{episodes} eps</Episodes> */}
        </CardMeta>
      </CardContent>
    </CardContainer>
  );
};