import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}

const DisplayNested = ({ nestedObjected }) => {
  const renderObject = (obj, indent = 0) => {
    return Object.keys(obj).map((key) => {
    if (typeof obj[key] === 'object') {
      return (
        <div key={key} style={{ marginLeft: indent * 20 }}>
          <span style={{ fontSize: 18, fontWeight: 'bold' }}>{key}</span>
          <br />
          {renderObject(obj[key], indent + 1)}
          </div>
      )
    }
    return (
      <div key={key} style={{ marginLeft: indent * 20 }}>
      <strong>{key}:</strong> {obj[key]}
    </div>
      )
  })

}
return (
  <div>{renderObject(nestedObjected)}</div>
)
}
export default App
