@_default:
   just --list

build:
   npm ci && npm run build

start:
   npm ci && npm run dev