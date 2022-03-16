import Home from './components/Home'
import Product from './components/Product'
import Blog from './components/Blog'

export const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/Product', name: 'product', component: Product },
    { path: '/Blog', name: 'blog', component: Blog }
]