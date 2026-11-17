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
        <div className='w-[100vw] min-h-[100vh] bg-[#141414] text-[white] flex flex-col items-center justify-center gap-[16px] px-[20px] text-center'>
          <h1 className='text-[25px] font-semibold'>Something went wrong</h1>
          <p className='text-[16px]'>Please refresh the page or go back to the home page.</p>
          <button
            type='button'
            onClick={() => window.location.assign('/')}
            className='h-[45px] px-[24px] bg-[#6060f5] rounded-lg font-semibold cursor-pointer'
          >
            Back to home
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
