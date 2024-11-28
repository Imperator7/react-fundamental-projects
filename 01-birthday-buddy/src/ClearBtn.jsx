const ClearBtn = ({ setPeople }) => {
  const handleClearBtn = () => {
    setPeople([])
  }
  return (
    <button className="btn" onClick={handleClearBtn}>
      Clear All
    </button>
  )
}
export default ClearBtn
