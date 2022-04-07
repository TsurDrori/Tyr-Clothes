import categories from '../categories.json'
import DirectoryCard from './DirectoryCard.jsx'

export default function DirectoryList() {
  return (
    <div className="directories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryCard
        key={id}
        imageUrl={imageUrl}
        title={title} />
      ))}
    </div>
  )
}