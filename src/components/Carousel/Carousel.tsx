import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';
import Slider from 'react-slick';
import { ReactNode } from 'react';
import CarouselArrow from './CarouselArrow/CarouselArrow';

type TCarouselProps = {
  children: ReactNode;
  hasControlsOffset?: boolean;
  slidesToShow: number;
};

/**
 * Carousel component
 * @component
 * @property {ReactNode} children - array of carousel item
 * @property {boolean} hasControlsOffset - if true, move the controls a little to the center and closer to items.
 * @property {boolean} slidesToShow - number of slides to show at one time.
 * @returns {JSX.Element} Carousel
 */
const Carousel = (props: TCarouselProps) => {
  const { children, hasControlsOffset, slidesToShow } = props;
  const settings = {
    dots: true,
    dotsClass: `dots ${hasControlsOffset ? 'offset' : ''}`,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    nextArrow: (
      <CarouselArrow direction="next" hasControlsOffset={hasControlsOffset} />
    ),
    prevArrow: (
      <CarouselArrow direction="prev" hasControlsOffset={hasControlsOffset} />
    ),
  };
  return (
    <div className={`carousel-container ${hasControlsOffset ? 'offset' : ''}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
