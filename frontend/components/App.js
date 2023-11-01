import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()
  
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
          .then(res => {
            console.log(res.data)
            setApod(res.data)
          })
          .catch(err => {
            console.log(err.message)
          })
    }
     // fetchPhoto()
        setApod({
           "copyright": "\nRichard McInnis\n",
           "date": "2023-10-31",
           "explanation": "Halloween's origin is ancient and astronomical.  Since the fifth century BC, Halloween has been celebrated as a cross-quarter day, a day halfway between an equinox (equal day / equal night) and a solstice (minimum day / maximum night in the northern hemisphere).  With a modern calendar however, even though Halloween occurs today, the real cross-quarter day will occur next week.  Another cross-quarter day is Groundhog Day. Halloween's modern celebration retains historic roots in dressing to scare...",
           "hdurl": "https://apod.nasa.gov/apod/image/2310/WizardCenter_McInnis_960.jpg",
           "media_type": "image",
           "service_version": "v1",
           "title": "Halloween and the Wizard Nebula",
           "url": "https://apod.nasa.gov/apod/image/2310/WizardCenter_McInnis_960.jpg"
       })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card 
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
