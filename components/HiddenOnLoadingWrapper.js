const HiddenOnLoadingWrapper = ({ children, isLoading = false }) => {
  if (isLoading) {
    return <div className="hidden">{children}</div>;
  }

  return <>{children}</>;
};

export default HiddenOnLoadingWrapper;
