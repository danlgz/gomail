import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import { RouterProvider } from 'react-router-dom'
import { PaletteProvider } from './providers/pallete';
import Router from './routes/router';

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <React.StrictMode>
      <PaletteProvider>
        <RouterProvider router={Router} />
      </PaletteProvider>
    </React.StrictMode>
)
