
import {
  createContext,
  ReactNode,
  useState,
  useContext
} from "react";

interface Props {
  children: ReactNode;
}

interface Destination {
  nbHotel: number;
  nbResident: number;
  nbSalaryMoy: number;
  nbSurface: number;
  activated: boolean;
  address: string;
  imageLink: string;
  name: string;
}

interface ContextType {
  destinations : Destination[];
  setDestinations: (destinations: Destination[])=> void;
}

interface LocalStorageHook {
  destinations: Destination[],
  setDestinations: (destinations: Destination[]) => void
}

const DestinationsContext = createContext<ContextType | undefined>(undefined);

export const DestinationsProvider = ({ children }: Props): JSX.Element => {

  const { destinations, setDestinations } = useLocalStorage()

  return (
    <DestinationsContext.Provider value={{ destinations, setDestinations }} >
      {children}
    </DestinationsContext.Provider>
  )

};

export const useDestinationsContext = (): ContextType => {
  const context = useContext(DestinationsContext);
  if (context === undefined) {
    throw new Error(
      "`useDestinationsContext` must be used within a `DestinationsProvider`"
    );
  }
  return context;
};

const useLocalStorage = (): LocalStorageHook => {
  const initialValue = JSON.parse(localStorage.getItem('destinations') ?? '[]');
  const [ destinationsState, setDestinationsState ] = useState(initialValue);

  const setDestinations = (destinations: Destination[]) => {
    localStorage.setItem('destinations', JSON.stringify(destinations))
    setDestinationsState(destinations);
  }

  return {
    destinations: destinationsState,
    setDestinations,
  }
}