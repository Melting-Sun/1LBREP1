import React, { useEffect, useState } from 'react'

function Testing() {
  
  useEffect(() => {
    console.log("this is our first use effect")
  }, [])
  return <div>Testing</div>
}

export default Testing