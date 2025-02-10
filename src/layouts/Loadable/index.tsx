import { Suspense } from "react";
import Spinner from "../../components/Spinner";

// // ===========================|| LOADABLE - LAZY LOADING ||=========================== //

export const Loadable = <T extends object>(Component: React.LazyExoticComponent<React.FC<T>>) => {
  const LoadableComponent: React.FC<T> = (props) => (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );
  return LoadableComponent;
};
