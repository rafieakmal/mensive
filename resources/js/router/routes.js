import HomePage from '../src/pages/HomeComponent'
import NextPage from '../src/pages/HomeTwoComponent.vue'

import PageOne from '../src/components/bucin/PageOne.vue'


const routes = [{
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/next',
    component: NextPage,
    name: 'next-home',
  }
]

export default routes;
