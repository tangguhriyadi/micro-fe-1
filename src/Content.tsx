import React from 'react'
import { ButtonProps } from '../@mf-typescript/app2/Button'

const Button = React.lazy(() => import('app2/Button') as Promise<{default: React.FC<ButtonProps>}>)

const Content = () => {
  return (
    <div>
      Content1 
      <React.Suspense fallback={<span>Loading...</span>}>
      <Button label='COBA NIH'/>
      </React.Suspense>
    </div>
  )
}

export default Content