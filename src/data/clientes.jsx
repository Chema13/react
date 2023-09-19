export async function obtenerClientes() {
  const response = await fetch(import.meta.env.VITE_API_URL)
  const res = await response.json()
  return res
}

export async function obtenerCliente(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
  const res = await response.json()
  return res
}

export async function agregarCliente(datos) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'content-Type': 'application/json',
      },
    })
    await response.json()
  } catch (error) {
    console.log(error)
  }
}

export async function actualizarCliente(id, datos) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'content-Type': 'application/json',
      },
    })
    await response.json()
  } catch (error) {
    console.log(error)
  }
}

export async function eliminarCliente(id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
    })
    await response.json()
  } catch (error) {
    console.log(error)
  }
}
