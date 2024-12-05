/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as JoinIndexImport } from './routes/join/index'
import { Route as BattleIndexImport } from './routes/battle/index'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const JoinIndexRoute = JoinIndexImport.update({
  id: '/join/',
  path: '/join/',
  getParentRoute: () => rootRoute,
} as any)

const BattleIndexRoute = BattleIndexImport.update({
  id: '/battle/',
  path: '/battle/',
  getParentRoute: () => rootRoute,
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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/battle/': {
      id: '/battle/'
      path: '/battle'
      fullPath: '/battle'
      preLoaderRoute: typeof BattleIndexImport
      parentRoute: typeof rootRoute
    }
    '/join/': {
      id: '/join/'
      path: '/join'
      fullPath: '/join'
      preLoaderRoute: typeof JoinIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/battle': typeof BattleIndexRoute
  '/join': typeof JoinIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/battle': typeof BattleIndexRoute
  '/join': typeof JoinIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/battle/': typeof BattleIndexRoute
  '/join/': typeof JoinIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/battle' | '/join'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/battle' | '/join'
  id: '__root__' | '/' | '/about' | '/battle/' | '/join/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  BattleIndexRoute: typeof BattleIndexRoute
  JoinIndexRoute: typeof JoinIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  BattleIndexRoute: BattleIndexRoute,
  JoinIndexRoute: JoinIndexRoute,
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
        "/about",
        "/battle/",
        "/join/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/battle/": {
      "filePath": "battle/index.tsx"
    },
    "/join/": {
      "filePath": "join/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
