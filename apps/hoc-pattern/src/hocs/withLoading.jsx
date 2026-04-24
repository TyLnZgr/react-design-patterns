const withLoading = (Component) => {
  return function WithLoading(props) {
    const { isLoading } = props;

    if (isLoading) {
      return (
        <div className="status-card status-card--loading">
          <strong>Yükleniyor...</strong>
          <span>Lütfen bekleyin.</span>
        </div>
      );
    }

    return <Component {...props} />;
  };
};

export default withLoading;
