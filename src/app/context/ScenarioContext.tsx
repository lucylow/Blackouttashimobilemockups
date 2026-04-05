import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ScenarioType, ScenarioData, scenarios } from '../data/mockData';

interface ScenarioContextType {
  currentScenario: ScenarioType;
  scenarioData: ScenarioData;
  setScenario: (scenario: ScenarioType) => void;
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [currentScenario, setCurrentScenario] = useState<ScenarioType>('wallet');

  const setScenario = (scenario: ScenarioType) => {
    setCurrentScenario(scenario);
  };

  const scenarioData = scenarios[currentScenario];

  return (
    <ScenarioContext.Provider value={{ currentScenario, scenarioData, setScenario }}>
      {children}
    </ScenarioContext.Provider>
  );
}

export function useScenario() {
  const context = useContext(ScenarioContext);
  if (!context) {
    throw new Error('useScenario must be used within a ScenarioProvider');
  }
  return context;
}
