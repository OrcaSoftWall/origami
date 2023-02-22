import { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log("Component Did Catch is triggered___ ", errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <h1>Something went wrong</h1>

                    <h4>Here I can put any fallback</h4>
                </>
            )
            // console.log("ErrorBoundary>>>>>>>>>>>>>>>>>>>>>>>>>")
            // window.location.href = '/error'
            // return null
        }

        return this.props.children
    }
}

export default ErrorBoundary