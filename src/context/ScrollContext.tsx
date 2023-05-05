import React, { ReactNode, RefObject, createContext, useRef } from 'react';

type RefType = RefObject<HTMLDivElement> | null;

type RefContextProps = {
  homeRef: RefType;
  aboutRef: RefType;
  experienceRef: RefType;
  servicesRef: RefType ;
  portfolioRef: RefType;
  projectsRef: RefType ;
  contactRef: RefType;
  emailRef: RefType;
};

interface RefProviderProps {
    children: React.ReactNode;
}

export const RefContext = createContext<RefContextProps>({
  homeRef: null,
  aboutRef: null,
  experienceRef: null,
  servicesRef: null,
  portfolioRef: null,
  projectsRef: null,
  contactRef: null,
  emailRef: null,
});


export const RefProvider = ({ children }: RefProviderProps) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);

  return (
    <RefContext.Provider
      value={{
        homeRef,
        aboutRef,
        experienceRef,
        servicesRef,
        portfolioRef,
        projectsRef,
        contactRef,
        emailRef
      }}
    >
      {children}
    </RefContext.Provider>
  );
};