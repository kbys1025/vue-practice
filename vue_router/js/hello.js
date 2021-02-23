const User = {
    template: `
        <div class="user">
            <h2>User {{ $route.params.userId }}</h2>
            <router-view></router-view>
        </div>
    `
}

const Profile = {
    template: `
        <div class="profile">
            <h2>Profile {{ $route.params.userId }}</h2>
        </div>
    `
}

const Posts = {
    template: `
        <div class="posts">
            <h2>Posts {{ $route.params.userId }}</h2>
        </div>
    `
}

const B = {
    template: `
        <div>
            <h2>This is B.</h2>
        </div>
    `
}

const router = new VueRouter({
    routes: [
        {
            path: '/users/:userId',
            component: User,
            children: [
                {
                    path: 'profile',
                    component: Profile
                },
                {
                    path: 'posts',
                    component: Posts
                }
            ]
        },
        {
            path: '/a',
            // redirect: '/b'
            redirect: { name: 'page-b'}
        },
        {
            path: '/b',
            name: 'page-b',
            component: B
        }
    ]
})

const app = new Vue({
    router: router
}).$mount('#app')