import React from 'react'
import { baseImgUrl } from '../../constants'
export default function Detail(props) {
    const {
        title,
        overview,
        genres,
        release_date,
        production_companies,
        production_countries,
        vote_average,
        vote_count,
        poster_path } = props.mediaItem
    return (
        <div>
            <h1>{title}</h1>
            <div className='detailItems'>
                <div className='itemDetails'>
                    <p>{overview}</p>
                    <h3>Details</h3>
                    <ul className='metadata'>
                        <li>
                            <h4>User score</h4>
                            <p>{vote_average + ' '}<small>{vote_count} reviews</small></p>
                        </li>
                        <li>
                            <h4>Genre</h4>
                            <p>{genres.map((genre, index) => <span key={index}>{genre.name + ' '}</span>)}</p>
                        </li>
                        <li>
                            <h4>Release date</h4>
                            <p>{release_date}</p>
                        </li>
                        <li>
                            <h4>Production companies</h4>
                            <p>{production_companies.map((company, index) => <span key={index}>{company.name + ' '}</span>)}</p>
                        </li>
                        <li>
                            <h4>Production countries</h4>
                            <p>{production_countries.map((country, index) => <span key={index}>{country.name + ' '}</span>)}</p>
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
