import { create } from "zustand";

interface State {
  username: string;
  setUsername: (username: string) => void;
  shouldRefetch: boolean;
  setShouldRefetch: (newState: boolean) => void;
}

const useStore = create<State>()((set) => ({
  username: "",
  setUsername: (username: string) => {
    set({ username });
  },
  shouldRefetch: false,
  setShouldRefetch: (newState: boolean) => {
    set({ shouldRefetch: newState });
  },
}));

export default useStore;
