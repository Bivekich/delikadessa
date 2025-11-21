import { useState, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Если это Sanity изображение, добавляем параметры оптимизации
    if (src?.includes('cdn.sanity.io')) {
      // Добавляем параметры для оптимизации
      const optimizedUrl = new URL(src);
      optimizedUrl.searchParams.set('auto', 'format'); // Автоматический выбор формата (WebP если поддерживается)
      optimizedUrl.searchParams.set('fit', 'max'); // Максимальный размер с сохранением пропорций
      if (width) optimizedUrl.searchParams.set('w', width);
      if (height) optimizedUrl.searchParams.set('h', height);
      optimizedUrl.searchParams.set('q', '85'); // Качество 85%

      setImageSrc(optimizedUrl.toString());
    } else {
      setImageSrc(src);
    }
  }, [src, width, height]);

  const handleError = () => {
    setImageError(true);
    // Fallback к оригинальному src если оптимизированный не загрузился
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  if (!imageSrc) {
    return (
      <div
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height }}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage;
