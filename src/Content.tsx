import React from 'react'

const Button = React.lazy(() => import('app2/Button') as Promise<{default: React.FC}>)

const Content = () => {
  return (
    <div>
      Content1 
      <React.Suspense fallback={<span>Loading...</span>}>
      <Button />
      </React.Suspense>
    </div>
  )
}

export default Content