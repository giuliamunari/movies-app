/**
 * component that renders each detail of an item
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../constants'
export default function Detail(props) {
    const {
        id,
        title, 
        name,
        overview,
        genres,
        release_date,
        production_companies,
        production_countries,
        vote_average,
        vote_count,
        poster_path, 
        } = props.mediaItem
    return (
        <div>
            {name && <h1>{name}</h1>}
            {title && <h1>{title}</h1>}
            <div className='detailItems'>
                <div className='itemDetails'>
                    {overview && <p>{overview}</p>}
                    <h3>Details</h3>
                    <ul className='metadata'>
                        {(vote_average && vote_count) &&
                            <li>
                                <h4>User score</h4>
                                <p>{vote_average + ' '}<small>{vote_count} reviews</small></p>
                            </li>
                        }
                        {genres &&
                            <li>
                                <h4>Genre</h4>
                                <p>{genres.map((genre, index) => <span key={index}>{genre.name + ' '}</span>)}</p>
                            </li>
                        }
                        {release_date &&
                            <li>
                                <h4>Release date</h4>
                                <p>{release_date}</p>
                            </li>
                        }
                        {production_companies &&
                            <li>
                                <h4>Production companies</h4>
                                <p>{production_companies.map((company, index) => <span key={index}>{company.name + ' '}</span>)}</p>
                            </li>
                        }
                        {production_countries &&
                            <li>
                                <h4>Production countries</h4>
                                <p>{production_countries.map((country, index) => <span key={index}>{country.name + ' '}</span>)}</p>
                            </li>
                        }
                        <li>
                            <Link to={`/detail/${props.type}/${id}/player`} className='button'>Play now</Link>
                        </li>
                    </ul>
                </div>
                <div className='itemImage'>
                    <img src={`${baseImgUrl}${poster_path}`} alt={title} />
                </div>
            </div>
        </div>
    )
}
