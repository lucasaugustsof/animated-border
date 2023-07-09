import React from 'react'
import './global.css'

import { Card } from './components/Card'
import { Tagger } from './components/Tagger'

import turborepoVisualLogoSvg from './assets/turborepo-visual-logo.svg'
import turborepoTextLogoSvg from './assets/turborepo-text-logo.svg'
import turbopackVisualLogoSvg from './assets/turbopack-visual-logo.svg'
import turbopackTextLogoSvg from './assets/turbopack-text-logo.svg'

const App: React.FC = () => {
  return (
    <>
      <Card.Root>
        <Card.Content>
          <Card.Brand>
            <img
              title="turborepo"
              src={turborepoVisualLogoSvg}
              alt="Turborepo visual logo"
            />
          </Card.Brand>

          <Card.Introduction>
            <img
              title="turborepo"
              src={turborepoTextLogoSvg}
              alt="Turborepo text logo"
            />

            <Card.Description>
              High-performance build system for <br />
              JavaScript and TypeScript codebases.
            </Card.Description>
          </Card.Introduction>
        </Card.Content>
      </Card.Root>

      <Card.Root>
        <Card.Content>
          <Tagger />

          <Card.Brand>
            <img
              title="turbopack"
              src={turbopackVisualLogoSvg}
              alt="Turbopack visual logo"
            />
          </Card.Brand>

          <Card.Introduction>
            <img
              title="turbopack"
              src={turbopackTextLogoSvg}
              alt="Turbopack text logo"
            />

            <Card.Description>
              Introducing the Rust-powered <br />
              successor to Webpack.
            </Card.Description>
          </Card.Introduction>
        </Card.Content>
      </Card.Root>
    </>
  )
}

export default App
