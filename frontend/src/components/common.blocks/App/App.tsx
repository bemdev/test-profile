import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from '../../../router'

import { configureRootTheme } from '@yandex/ui/Theme'
import { theme } from '@yandex/ui/Theme/presets/default'

import './App.css';

configureRootTheme({ theme })

const App = () => <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />

export default App;
