export const useMenuItems = () => {
  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Tech stack', id: 'tech-stack' },
    // { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
    { name: 'Blog', path: '/blog' }
  ]

  return {
    menuItems
  }
}
