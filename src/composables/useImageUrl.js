export function useImageUrl() {
  function imageUrl(image, folder) {
    const localhost = new URL(import.meta.url)
    const appUrl = localhost.origin
    const imageUrl = new URL(`${import.meta.env.VITE_BASE_URL}/images/${folder}/${image}`, appUrl)

    return imageUrl.href
  }

  return { imageUrl }
}
