import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import CommunityPage from '@/pages/CommunityPage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import BountyPage from '@/pages/BountyPage.vue'


const routes = [
	{
		path: '/',
		component: MainPage
	},
	{
		path: '/platform',
		component: BountyPage
	},
	{
		path: '/community',
		component: CommunityPage
	},
	{
		path: '/team',
		component: TeamPage
	}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;