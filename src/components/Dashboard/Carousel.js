/**
 * component that renders a media in a carousel
 */
import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../constants'
export default function Carousel(props) {
    const renderCard = (item, index) => {
        const mediaTitle = item.title ? item.title : item.name
        return <div key={index} className='cards'>
            <Link to={`/detail/${props.type}/${item.id}`}>
                <img src={`${baseImgUrl}${item.poster_path}`} alt={mediaTitle} />
                <p>{mediaTitle}</p>
            </Link>
        </div>
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                ]}
                dots={false}
                showSides={true}
                sidesOpacity={.5}
                sideSize={.1}
                slidesToScroll={4}
                slidesToShow={5}
                scrollOnDevice={true}
                lazyLoad={false}
                autoCycle={false}
                responsive={true}
            >
                {props.data.map((item, index) =>
                    renderCard(item, index)
                )}
            </InfiniteCarousel>
        </div>
    )
}
