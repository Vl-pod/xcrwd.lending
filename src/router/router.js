import { createMemoryHistory, createRouter } from 'vue-router';


const routes = [
	{
		path: '/',
		component: ''
	},
	{
		path: '/',
		component: ''
	},
	{
		path: '/',
		component: ''
	},
	{
		path: '/',
		component: ''
	}
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;