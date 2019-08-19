import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../constants'
export default function SearchResult(props) {
    return (
        <div>
            {props.data.map((item, index) =>
                <div key={index}>
                    <Link to={`/detail/${props.type}/${item.id}`}>
                        <img src={`${baseImgUrl}${item.poster_path}`} alt={item.title} />
                        <p>{item.title}</p>
                    </Link>
                </div>
            )}
        </div>
    )
}
