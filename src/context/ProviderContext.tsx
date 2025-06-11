import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";
import { useLocation } from "react-router-dom";

type PageContextType = {
  onPage: string;
  setOnPage: React.Dispatch<SetStateAction<string>>;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export function ProviderContext({ children }: { children: ReactNode }) {
  const [onPage, setOnPage] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const path =
      location.pathname === "/" ? "home" : location.pathname.slice(1);
    setOnPage(path);
  }, [location]);

  return (
    <PageContext.Provider value={{ onPage, setOnPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function useProviderContext() {
  const context = useContext(PageContext);
  if (!context)
    throw new Error(
      "useProviderContext tem que ser usado dentro do ProviderContext"
    );
  return context;
}
