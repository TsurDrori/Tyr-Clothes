const App = () => {

  const categories = [
    {
      id: 1,
      title: 'hats',
    },
    {
      id: 2,
      title: 'snickers',
    },
    {
      id: 3,
      title: 'jackets',
    },
    {
      id: 4,
      title: 'woman',
    },
    {
      id: 5,
      title: 'man',
    }
  ]

  return (
    <div className="categories-container">
{categories.map(({title}) => (
      <div className="category-container">
        <div className="background-image">
        {/* <img src="" alt="" /> */}
        </div>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>shop now</p>
        </div>
      </div>
))}
    </div>
  );
}

export default App;
