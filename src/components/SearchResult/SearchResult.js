/**
 * component that renders the search results
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../constants'
export default function SearchResult(props) {
    return (
        <div className='searchResults'>
            {props.data.map((item, index) =>
                <div key={index} className='cards'>
                    <Link to={`/detail/${props.type}/${item.id}`}>
                        <img src={`${baseImgUrl}${item.poster_path}`} alt={item.title} />
                        <p>{item.title}</p>
                    </Link>
                </div>
            )}
        </div>
    )
}
