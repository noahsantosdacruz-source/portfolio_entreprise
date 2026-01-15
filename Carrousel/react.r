{items.map(item => (
  <img
    key={item.id}
    src={item.image}
    onClick={() => setSelected(item)}
  />
))}

{selected && (
  <div className="modal">
    <h2>{selected.title}</h2>
    <p>{selected.description}</p>
  </div>
)}
