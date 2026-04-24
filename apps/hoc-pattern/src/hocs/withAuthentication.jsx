const withAuthentication = (Component) => {
  return function WithAuthentication(props) {
    const { isAuthenticated } = props;

    if (!isAuthenticated) {
      return (
        <div className="status-card status-card--warning">
          <strong>Yetki Gerekli</strong>
          <span>Bu içerik için giriş yapmanız gerekiyor.</span>
        </div>
      );
    }

    return <Component {...props} />;
  };
};

export default withAuthentication;
