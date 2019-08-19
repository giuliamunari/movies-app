/**
 * search bar form component
 */
import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit} className='searchItem'>
                <select value={props.values.type} name='type' onChange={props.onChange} className='input' required>
                    {props.options.map((option, index) => <option value={option} key={index} id={index}>{option}</option>)}
                </select>
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
