export function useMenuData() {
  function menuData() {
    return [
      { id: 1, title: 'Home', path: '/' },
      { id: 2, title: 'About', path: '/about' },
      { id: 3, title: 'Contact us', path: '/contact-us' },
      { id: 4, title: 'Blog', path: '/blog' }
    ]
  }

  return { menuData }
}
