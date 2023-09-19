import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_FACT = 'https://cataas.com/'
//const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstThreeWord}?size=50&color=red&json=true`

export default function Prueba() {
  const navigate = useNavigate()

  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  //recuperar las letras al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  //

  useEffect(() => {
    if (!fact) return
    const firstThreeWord = fact.split(' ', 3).join(' ')

    fetch(
      `https://cataas.com/cat/says/${firstThreeWord}?size=50&color=red&json=true`,
    )
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main className='flex flex-col text-center py-6 font-sans items-center'>
      <h1 className='text-6xl'>Prueba Gatos</h1>
      {fact && <h1 className='pb-4'>{fact}</h1>}
      <button
        className='bg-green-300 px-5 py-2 font-bold rounded '
        onClick={() => navigate('/')}
      >
        {' '}
        Regresar
      </button>
      {imageUrl && (
        <img
          className='w-[30%] pt-10'
          src={`${CAT_PREFIX_FACT}${imageUrl}`}
          alt='imagen de gatito'
        />
      )}
    </main>
  )
}
