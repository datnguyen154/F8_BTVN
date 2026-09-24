function withLoading(WrappedComponent) {
    function WithLoading({ isLoading, ...props }) {
        if (isLoading) {
            return <p>Loading...</p>;
        }

        return <WrappedComponent {...props} />;
    }

    return WithLoading;
}

export default withLoading;
