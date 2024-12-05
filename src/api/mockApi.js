import products from '../../static/products.json' // Import the JSON file

export const mockApi = {
  getProducts: async (filters = {}, sort = null, page = 1, pageSize = 5) => {
    // Simulate network latency (e.g., 1 to 3 seconds delay)
    const latency = Math.floor(Math.random() * (3000 - 1000 + 1)) + 500 // Delay between 0.5 and 1.5 seconds

    return new Promise(resolve => {
      setTimeout(() => {
        let result = [...products]

        // Apply filtering
        if (filters?.minPrice) {
          result = result.filter(product => product.price >= filters.minPrice)
        }
        if (filters?.maxPrice) {
          result = result.filter(product => product.price <= filters.maxPrice)
        }
        if (filters?.rating) {
          result = result.filter(product => product.rating >= filters.rating)
        }

        // Apply sorting

        if (sort) {
          const [key, order] = sort.split('_')

          if (key === 'title') {
            result.sort((a, b) => {
              if (order === 'asc') return a[key].localeCompare(b[key])
              if (order === 'desc') return b[key].localeCompare(a[key])
              return 0
            })
          } else {
            result.sort((a, b) => {
              if (order === 'asc') return a[key] - b[key]
              if (order === 'desc') return b[key] - a[key]
              return 0
            })
          }
        }

        // Paging
        const startIndex = (page - 1) * pageSize
        const endIndex = startIndex + pageSize
        const paginatedResult = result.slice(startIndex, endIndex)

        // Return the response after delay
        resolve({
          ok: 1,
          total: result.length,
          data: paginatedResult
        })
      }, latency) // Simulate the latency
    })
  }
}
