import React, { useState } from 'react'

const NameHook = () => {
  const [info, setInfo] = useState({ name: '', surname: '' })

  const handleChangeinfo = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <input value={info.name} onChange={handleChangeinfo} name="name" />
      <input value={info.surname} onChange={handleChangeinfo} name="surname" />
    </div>
  )
}

export default NameHook
