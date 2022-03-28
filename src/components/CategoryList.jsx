import categories from '../categories.json'
import CategoryCard from './CategoryCard.jsx'

export default function CategoryList() {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryCard
        key={id}
        imageUrl={imageUrl}
        title={title} />
      ))}
    </div>
  )
}