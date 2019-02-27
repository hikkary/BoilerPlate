import React, { useState } from 'react'

const NameHook = () => {
  const [info, setInfo] = useState({ name: 'abdou', surname: 'kerkeb' })

  const handelChangeinfo = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <input value={info.name} onChange={handelChangeinfo} name="name" />
      <input value={info.surname} onChange={handelChangeinfo} name="surname" />
    </div>
  )
}

export default NameHook
