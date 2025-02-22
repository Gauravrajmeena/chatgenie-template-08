
const LoadingDots = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" />
      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse delay-100" />
      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse delay-200" />
    </div>
  );
};

export default LoadingDots;
