import './App.css'

function App() {
  // render 100 divs full width,
  // spread evently across the entire height of viewport,
  // add number and different color to each item
  const items = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    color: `hsl(${i * 3.6}, 100%, 50%)`, // Different color for each item
    number: i + 1, // Number from 1 to 100
  }))
  return (
    <>
      {items.map((item) => (
        <div
          className='Item'
          key={item.id}
          style={{
            backgroundColor: item.color,
            height: `${100 / items.length}vh`, // Spread evenly across viewport height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1rem',
          }}
        >
          {item.number}
        </div>
      ))}
    </>
  )
}

export default App
