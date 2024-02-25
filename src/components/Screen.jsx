const Screen = ({equation, total}) => {
  return (
    <div className='screen'>
        <div className="upper-screen">{equation}</div>
        <div className="lower-screen">{total}</div>
    </div>
  )
}

export default Screen