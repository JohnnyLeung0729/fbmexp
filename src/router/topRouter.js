
export const topRouterMap = [
    {
        'parentName':'home',
        'data':[
            {
                path: '/home',
                name: '首页',
                meta: {
                    title: '首页',
                    icon: 'fa-asterisk',
                    routerType: 'topmenu'
                },
                component: () => import('@/page/home/index')
            },
            {
                path: '/home1',
                name: '首页1',
                meta: {
                    title: '首页',
                    icon: 'fa-asterisk',
                    routerType: 'topmenu'
                },
                component: () => import('@/page/home/index')
            },
            // {
            //     path: 'infoShow2',
            //     name: 'infoShow2',
            //     meta: {
            //         title: '个人信息子菜单2',
            //         icon: 'fa-asterisk',
            //         routerType: 'topmenu'
            //     },
            //     component: () => import('@/page/fundList/moneyData')
            // },
            // {
            //     path: 'infoShow3',
            //     name: 'infoShow3',
            //     meta: {
            //         title: '个人信息子菜单3',
            //         icon: 'fa-asterisk',
            //         routerType: 'topmenu'
            //     },
            //     component: () => import('@/page/fundList/moneyData')
            // },
            // {
            //     path: 'infoShow4',
            //     name: 'infoShow4',
            //     meta: {
            //         title: '个人信息子菜单4',
            //         icon: 'fa-asterisk',
            //         routerType: 'topmenu'
            //     },
            //     component: () => import('@/page/fundList/moneyData')
            // },
            // {
            //     path: 'infoShow5',
            //     name: 'infoShow5',
            //     meta: {
            //         title: '个人信息子菜单5',
            //         icon: 'fa-asterisk',
            //         routerType: 'topmenu'
            //     },
            //     component: () => import('@/page/fundList/moneyData')
            // }
        ]
    },
    // {
    //     'parentName':'infoModify',
    //     'data':[
    //         {
    //             path:'infoModify1',
    //             name:'infoModify1',
    //             meta:{
    //                 title:'修改信息子菜单1',
    //                 icon:'fa-asterisk',
    //                 routerType:'topmenu'
    //             },
    //             component: () => import('@/page/infoManage/infoModify')
    //         },
    //         {
    //             path:'infoModify2',
    //             name:'infoModify2',
    //             meta:{
    //                 title:'修改信息子菜单2',
    //                 icon:'fa-asterisk',
    //                 routerType:'topmenu'
    //             },
    //             component: () => import('@/page/fundList/moneyData')
    //         },
    //         {
    //             path:'infoModify3',
    //             name:'infoModify3',
    //             meta:{
    //                 title:'修改信息子菜单3',
    //                 icon:'fa-asterisk',
    //                 routerType:'topmenu'
    //             },
    //             component: () => import('@/page/fundList/moneyData')
    //         }
    //     ]
    // }
]

