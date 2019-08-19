import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit} className='searchItem'>
                <input
                    type='text'
                    name='query'
                    placeholder='Search...'
                    onChange={props.onChange}
                    value={props.values}
                    className='input'
                />
                
                <button className='button'>Search</button>
            </form>
        </div>
    )
}
