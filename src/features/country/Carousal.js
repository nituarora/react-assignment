import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Carousal = (props) => {

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="mycarousal">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
      >

        {props.countryData.map((image, index) => (
          <div key={index}>
            {/* navigate to detail page */}
            <Link to={`/detail/${image.countryname}`}>
              <div className="image-container">
                <img src={image.image.png} alt={`Image ${index}`} />
                <button className='btnlink'>{image.countryname}</button>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>

  )
}

export default Carousal


