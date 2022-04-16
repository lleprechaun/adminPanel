
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/users-list', component: () => import('pages/MainLinks/UsersPage.vue') },
      { path: '/stavki', component: () => import('pages/MainLinks/StavkiPage.vue') },
      { path: '/answer-questions', component: () => import('pages/MainLinks/QuestionAnswerPage.vue') },
      { path: '/referral-program', component: () => import('pages/MainLinks/ReferralProgramPage.vue') },
      { path: '/bugs-errors', component: () => import('pages/MainLinks/BugsErrorsPage.vue') },
      { path: '/creating-ads', component: () => import('pages/MainLinks/CreatingAdsPage.vue') },
      { path: '/report-cards', component: () => import('pages/MainLinks/ReportCardsPage.vue') },
      { path: '/documents', component: () => import('pages/MainLinks/DocumentsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
