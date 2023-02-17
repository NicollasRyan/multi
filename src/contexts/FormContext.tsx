import { createContext, useReducer, useContext, ReactNode } from "react";

type State = {
  currentStep: number;
  name: string;
  level: string;
  email: string;
  github: string;
};

type Action = {
  type: FormAction;
  payload: any;
};

const initialData: State = {
  currentStep: 0,
  name: "",
  level: "",
  email: "",
  github: "",
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderType = {
  children: ReactNode;
};

const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormAction {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormAction.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormAction.setName:
      return { ...state, name: action.payload };
    case FormAction.setLevel:
      return { ...state, level: action.payload };
    case FormAction.setEmail:
      return { ...state, email: action.payload };
    case FormAction.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

export const FormProvider = ({ children }: FormProviderType) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro o FormProvider");
  }
  return context;
};
