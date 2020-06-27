import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { configure } from '@storybook/react';
import addons from '@storybook/addons'

import '../src/components/layout.css';

// get an instance to the communication channel for the manager and preview
const channel = addons.getChannel()

// switch body class for story along with interface theme
channel.on('DARK_MODE', isDark => {
  if (isDark) {
    document.documentElement.classList.add('mode-dark')
  } else {
    document.documentElement.classList.remove('mode-dark')
  }
})

addParameters({
    options: {
        showRoots: true,
        storySort: {
          method: 'alphabetical',
          order: ['Design System', 'Components'],
        },
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
});

configure(require.context("../src", true, /\.stories\.(tsx|mdx)$/), module)
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}