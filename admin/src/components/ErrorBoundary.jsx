import { Component } from 'react'

// Catches crashes while rendering so users see a message instead of a blank white page.
class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Unhandled UI error:', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='w-full min-h-screen bg-page text-ink flex flex-col items-center justify-center gap-[16px] px-[20px] text-center'>
          <h1 className='font-display text-[30px]'>Something went wrong</h1>
          <p className='text-[16px] text-muted'>Please refresh the page or go back to the overview.</p>
          <button
            type='button'
            onClick={() => window.location.assign('/')}
            className='h-12 px-7 bg-accent text-white rounded text-label-lg uppercase font-semibold hover:bg-accent-strong cursor-pointer'
          >
            Back to overview
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
