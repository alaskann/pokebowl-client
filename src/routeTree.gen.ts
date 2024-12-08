/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as mainMainImport } from './routes/(main)/_main'
import { Route as authAuthImport } from './routes/(auth)/_auth'
import { Route as mainMainProtectedImport } from './routes/(main)/_main/_protected'
import { Route as authAuthLoginIndexImport } from './routes/(auth)/_auth/login/index'
import { Route as authAuthJoinIndexImport } from './routes/(auth)/_auth/join/index'
import { Route as mainMainProtectedStatsIndexImport } from './routes/(main)/_main/_protected/stats/index'
import { Route as mainMainProtectedRandomIndexImport } from './routes/(main)/_main/_protected/random/index'
import { Route as mainMainProtectedBattleIndexImport } from './routes/(main)/_main/_protected/battle/index'

// Create Virtual Routes

const mainImport = createFileRoute('/(main)')()
const authImport = createFileRoute('/(auth)')()

// Create/Update Routes

const mainRoute = mainImport.update({
  id: '/(main)',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authRoute = authImport.update({
  id: '/(auth)',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const mainMainRoute = mainMainImport.update({
  id: '/_main',
  getParentRoute: () => mainRoute,
} as any)

const authAuthRoute = authAuthImport.update({
  id: '/_auth',
  getParentRoute: () => authRoute,
} as any)

const mainMainProtectedRoute = mainMainProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => mainMainRoute,
} as any)

const authAuthLoginIndexRoute = authAuthLoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => authAuthRoute,
} as any)

const authAuthJoinIndexRoute = authAuthJoinIndexImport.update({
  id: '/join/',
  path: '/join/',
  getParentRoute: () => authAuthRoute,
} as any)

const mainMainProtectedStatsIndexRoute =
  mainMainProtectedStatsIndexImport.update({
    id: '/stats/',
    path: '/stats/',
    getParentRoute: () => mainMainProtectedRoute,
  } as any)

const mainMainProtectedRandomIndexRoute =
  mainMainProtectedRandomIndexImport.update({
    id: '/random/',
    path: '/random/',
    getParentRoute: () => mainMainProtectedRoute,
  } as any)

const mainMainProtectedBattleIndexRoute =
  mainMainProtectedBattleIndexImport.update({
    id: '/battle/',
    path: '/battle/',
    getParentRoute: () => mainMainProtectedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_auth': {
      id: '/(auth)/_auth'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authAuthImport
      parentRoute: typeof authRoute
    }
    '/(main)': {
      id: '/(main)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof mainImport
      parentRoute: typeof rootRoute
    }
    '/(main)/_main': {
      id: '/(main)/_main'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof mainMainImport
      parentRoute: typeof mainRoute
    }
    '/(main)/_main/_protected': {
      id: '/(main)/_main/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof mainMainProtectedImport
      parentRoute: typeof mainMainImport
    }
    '/(auth)/_auth/join/': {
      id: '/(auth)/_auth/join/'
      path: '/join'
      fullPath: '/join'
      preLoaderRoute: typeof authAuthJoinIndexImport
      parentRoute: typeof authAuthImport
    }
    '/(auth)/_auth/login/': {
      id: '/(auth)/_auth/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authAuthLoginIndexImport
      parentRoute: typeof authAuthImport
    }
    '/(main)/_main/_protected/battle/': {
      id: '/(main)/_main/_protected/battle/'
      path: '/battle'
      fullPath: '/battle'
      preLoaderRoute: typeof mainMainProtectedBattleIndexImport
      parentRoute: typeof mainMainProtectedImport
    }
    '/(main)/_main/_protected/random/': {
      id: '/(main)/_main/_protected/random/'
      path: '/random'
      fullPath: '/random'
      preLoaderRoute: typeof mainMainProtectedRandomIndexImport
      parentRoute: typeof mainMainProtectedImport
    }
    '/(main)/_main/_protected/stats/': {
      id: '/(main)/_main/_protected/stats/'
      path: '/stats'
      fullPath: '/stats'
      preLoaderRoute: typeof mainMainProtectedStatsIndexImport
      parentRoute: typeof mainMainProtectedImport
    }
  }
}

// Create and export the route tree

interface authAuthRouteChildren {
  authAuthJoinIndexRoute: typeof authAuthJoinIndexRoute
  authAuthLoginIndexRoute: typeof authAuthLoginIndexRoute
}

const authAuthRouteChildren: authAuthRouteChildren = {
  authAuthJoinIndexRoute: authAuthJoinIndexRoute,
  authAuthLoginIndexRoute: authAuthLoginIndexRoute,
}

const authAuthRouteWithChildren = authAuthRoute._addFileChildren(
  authAuthRouteChildren,
)

interface authRouteChildren {
  authAuthRoute: typeof authAuthRouteWithChildren
}

const authRouteChildren: authRouteChildren = {
  authAuthRoute: authAuthRouteWithChildren,
}

const authRouteWithChildren = authRoute._addFileChildren(authRouteChildren)

interface mainMainProtectedRouteChildren {
  mainMainProtectedBattleIndexRoute: typeof mainMainProtectedBattleIndexRoute
  mainMainProtectedRandomIndexRoute: typeof mainMainProtectedRandomIndexRoute
  mainMainProtectedStatsIndexRoute: typeof mainMainProtectedStatsIndexRoute
}

const mainMainProtectedRouteChildren: mainMainProtectedRouteChildren = {
  mainMainProtectedBattleIndexRoute: mainMainProtectedBattleIndexRoute,
  mainMainProtectedRandomIndexRoute: mainMainProtectedRandomIndexRoute,
  mainMainProtectedStatsIndexRoute: mainMainProtectedStatsIndexRoute,
}

const mainMainProtectedRouteWithChildren =
  mainMainProtectedRoute._addFileChildren(mainMainProtectedRouteChildren)

interface mainMainRouteChildren {
  mainMainProtectedRoute: typeof mainMainProtectedRouteWithChildren
}

const mainMainRouteChildren: mainMainRouteChildren = {
  mainMainProtectedRoute: mainMainProtectedRouteWithChildren,
}

const mainMainRouteWithChildren = mainMainRoute._addFileChildren(
  mainMainRouteChildren,
)

interface mainRouteChildren {
  mainMainRoute: typeof mainMainRouteWithChildren
}

const mainRouteChildren: mainRouteChildren = {
  mainMainRoute: mainMainRouteWithChildren,
}

const mainRouteWithChildren = mainRoute._addFileChildren(mainRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof mainMainRouteWithChildren
  '': typeof mainMainProtectedRouteWithChildren
  '/join': typeof authAuthJoinIndexRoute
  '/login': typeof authAuthLoginIndexRoute
  '/battle': typeof mainMainProtectedBattleIndexRoute
  '/random': typeof mainMainProtectedRandomIndexRoute
  '/stats': typeof mainMainProtectedStatsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof mainMainRouteWithChildren
  '': typeof mainMainProtectedRouteWithChildren
  '/join': typeof authAuthJoinIndexRoute
  '/login': typeof authAuthLoginIndexRoute
  '/battle': typeof mainMainProtectedBattleIndexRoute
  '/random': typeof mainMainProtectedRandomIndexRoute
  '/stats': typeof mainMainProtectedStatsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(auth)': typeof authRouteWithChildren
  '/(auth)/_auth': typeof authAuthRouteWithChildren
  '/(main)': typeof mainRouteWithChildren
  '/(main)/_main': typeof mainMainRouteWithChildren
  '/(main)/_main/_protected': typeof mainMainProtectedRouteWithChildren
  '/(auth)/_auth/join/': typeof authAuthJoinIndexRoute
  '/(auth)/_auth/login/': typeof authAuthLoginIndexRoute
  '/(main)/_main/_protected/battle/': typeof mainMainProtectedBattleIndexRoute
  '/(main)/_main/_protected/random/': typeof mainMainProtectedRandomIndexRoute
  '/(main)/_main/_protected/stats/': typeof mainMainProtectedStatsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/join' | '/login' | '/battle' | '/random' | '/stats'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/join' | '/login' | '/battle' | '/random' | '/stats'
  id:
    | '__root__'
    | '/'
    | '/(auth)'
    | '/(auth)/_auth'
    | '/(main)'
    | '/(main)/_main'
    | '/(main)/_main/_protected'
    | '/(auth)/_auth/join/'
    | '/(auth)/_auth/login/'
    | '/(main)/_main/_protected/battle/'
    | '/(main)/_main/_protected/random/'
    | '/(main)/_main/_protected/stats/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  authRoute: typeof authRouteWithChildren
  mainRoute: typeof mainRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  authRoute: authRouteWithChildren,
  mainRoute: mainRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(auth)",
        "/(main)"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(auth)": {
      "filePath": "(auth)",
      "children": [
        "/(auth)/_auth"
      ]
    },
    "/(auth)/_auth": {
      "filePath": "(auth)/_auth.tsx",
      "parent": "/(auth)",
      "children": [
        "/(auth)/_auth/join/",
        "/(auth)/_auth/login/"
      ]
    },
    "/(main)": {
      "filePath": "(main)",
      "children": [
        "/(main)/_main"
      ]
    },
    "/(main)/_main": {
      "filePath": "(main)/_main.tsx",
      "parent": "/(main)",
      "children": [
        "/(main)/_main/_protected"
      ]
    },
    "/(main)/_main/_protected": {
      "filePath": "(main)/_main/_protected.tsx",
      "parent": "/(main)/_main",
      "children": [
        "/(main)/_main/_protected/battle/",
        "/(main)/_main/_protected/random/",
        "/(main)/_main/_protected/stats/"
      ]
    },
    "/(auth)/_auth/join/": {
      "filePath": "(auth)/_auth/join/index.tsx",
      "parent": "/(auth)/_auth"
    },
    "/(auth)/_auth/login/": {
      "filePath": "(auth)/_auth/login/index.tsx",
      "parent": "/(auth)/_auth"
    },
    "/(main)/_main/_protected/battle/": {
      "filePath": "(main)/_main/_protected/battle/index.tsx",
      "parent": "/(main)/_main/_protected"
    },
    "/(main)/_main/_protected/random/": {
      "filePath": "(main)/_main/_protected/random/index.tsx",
      "parent": "/(main)/_main/_protected"
    },
    "/(main)/_main/_protected/stats/": {
      "filePath": "(main)/_main/_protected/stats/index.tsx",
      "parent": "/(main)/_main/_protected"
    }
  }
}
ROUTE_MANIFEST_END */
