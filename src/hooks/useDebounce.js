import React, { useEffect, useState } from 'react'

const useDebounce = (value, deley = 700) => {

  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value)
    }, deley)

    return () => {
      clearTimeout(timeout)
    }
  }, [value, deley])



  return debounceValue
}

export default useDebounce

