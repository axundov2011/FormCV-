import { useState } from 'react'
import styles from './SearchInput.module.css'

const cars = [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Honda' },
    { id: 3, name: 'Ford' },
    { id: 4, name: 'Chevrolet' },
    { id: 5, name: 'Nissan' },
    { id: 6, name: 'BMW' },
    { id: 7, name: 'Mercedes-Benz' },
    { id: 8, name: 'Audi' },
    { id: 9, name: 'Volkswagen' },
    { id: 10, name: 'Hyundai' },
    { id: 11, name: 'Kia' },
]
const InputSearchFilter = () => {
    const [items] = useState(cars)
    const [searchTerm, setSearchTerm] = useState('')

    const filteredItems = items.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

     return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <ul className={styles.results}>
                {filteredItems.map((car) => (
                    <li className={styles.result} key={car.id}>{car.name}</li>
                ))}
            </ul>
        </div>
    )

}
   


export default InputSearchFilter