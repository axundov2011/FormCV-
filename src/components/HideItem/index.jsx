import React from 'react'

const HideItem = () => {
    const [items, setItems] = React.useState([
        "apple", "banana", "orange", "grape", "kiwi"
    ])

    const hideItem = (itemToHide) => {
        const newItems = items.filter(item => item !== itemToHide)
        setItems(newItems)
    }
    return (
        <ul>
            {
                items.map((item, index) => (
                    <li className='item' key={item}
                    onClick={() => hideItem(item)}
                    style={{ cursor: "pointer" }}
                    >
                        {item}

                    </li>
                ))
            }
        </ul>
    )
}

export default HideItem
