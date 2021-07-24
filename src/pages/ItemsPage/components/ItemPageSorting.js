import React, {useEffect, useReducer, useRef, useState} from "react";
import '../../../styles/item_page_sorting.scss'

function useClickOutside(ref, handler) {
    useEffect(() => {
            const listener = event => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler()
            }
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        }, [ref, handler]
    )
}

export const ItemPageSorting = ({setSorting}) => {

    const [isVisible, switchIsVisible] = useState(false)

    const ref = useRef()
    useClickOutside(ref, () => switchIsVisible())

    const sortTypes = ['алфавиту', 'цене']

    const [state, dispatch] = useReducer( sortReducer, {kindOfSort: sortTypes[0]} )

    function sortReducer(state, action) {
        switch (action.type) {
            case sortTypes[0]:
                return {kindOfSort: 'алфавиту'}
            case sortTypes[1]:
                return {kindOfSort: 'цене'}
            default:
                return state
        }
    }

    const toSort = (type) => {
        dispatch( {type} )
        switchIsVisible(!isVisible)
        if (type === sortTypes[0]) {
            setSorting('a-z')
        }
        if (type === sortTypes[1]) {
            setSorting('price')
        }
    }

    return <div className='sorting'>
        <div className='sorting__trigger'>
            <h4>Сортировать по:</h4>
            <div>
                <span onClick={() => switchIsVisible(!isVisible)}>{state.kindOfSort}</span>
            </div>
        </div>

        {isVisible === true
        && <ul ref={ref}>
            {sortTypes.map((item, index) =>
                <li className={item === state.kindOfSort ? 'active' : ''}
                    key={index}
                >
                    <span onClick={() => toSort(item)}>{item}</span>
                </li>
            )}

        </ul>}

    </div>
}