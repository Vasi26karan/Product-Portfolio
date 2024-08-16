import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ActiveButtonContextType {
  activeButton: string | undefined;
  setActiveButton: Dispatch<SetStateAction<string | undefined>>;
}

const ActiveButtonContext = createContext<ActiveButtonContextType>({
  activeButton: undefined,
  setActiveButton: () => {},
});

interface ActiveButtonProviderProps {
  readonly children: ReactNode;
}

export function ActiveButtonProvider({
  children,
}: ActiveButtonProviderProps): JSX.Element {
  const [activeButton, setActiveButton] = useState<string | undefined>();

  const value = useMemo(
    () => ({
      activeButton,
      setActiveButton,
    }),
    [activeButton, setActiveButton]
  );

  return (
    <ActiveButtonContext.Provider value={value}>
      {children}
    </ActiveButtonContext.Provider>
  );
}

export function useActiveButton(): ActiveButtonContextType {
  return useContext(ActiveButtonContext);
}
