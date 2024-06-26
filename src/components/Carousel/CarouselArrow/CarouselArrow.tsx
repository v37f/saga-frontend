import './CarouselArrow.scss';

interface ICarouselArrowProps {
  onClick?: React.MouseEventHandler | undefined;
  direction: 'prev' | 'next';
  hasControlsOffset?: boolean;
}

const CarouselArrow = (props: ICarouselArrowProps) => {
  const { onClick, direction, hasControlsOffset } = props;

  return (
    <button
      className={`carouselArrow ${direction} ${
        hasControlsOffset ? 'offset' : ''
      }`}
      onClick={onClick}
      aria-label={
        direction === 'next' ? 'Прокрутить далее' : 'Прокрутить назад'
      }
      title={direction === 'next' ? 'Прокрутить далее' : 'Прокрутить назад'}
    />
  );
};

export default CarouselArrow;
