export interface DiseaseInfo {
  name: string;
  symptoms: string;
  causes: string;
  prevention: string;
}

export interface PestInfo {
  name: string;
  symptoms: string;
  prevention: string;
  control: string;
}

export interface TimelineStage {
  stage: string;
  duration: string;
  description: string;
}

export interface PotLightInfo {
  requirement: string;
  placement: string;
}

export interface PotWateringInfo {
  requirement: string;
  moistureCheck: string;
  overwatering: string;
}

export interface PotContainerInfo {
  size: string;
  drainage: string;
  repotting: string;
}

export interface PotSoilInfo {
  type: string;
  drainage: string;
}

export interface PotEnvironmentInfo {
  temperature: string;
  conditions: string;
}

export interface PotFertilizationInfo {
  schedule: string;
  stages: string;
}

export interface PotCareInfo {
  pruning: string;
  leafCare: string;
  general: string;
}

export interface PotGrowingInfo {
  light: PotLightInfo;
  watering: PotWateringInfo;
  container: PotContainerInfo;
  soil: PotSoilInfo;
  environment: PotEnvironmentInfo;
  fertilization: PotFertilizationInfo;
  diseases: DiseaseInfo[];
  pests: PestInfo[];
  care: PotCareInfo;
  timeline: TimelineStage[];
}

export type GrowingMode = 'field' | 'pot';

export interface Crop {
  id: string;
  name: string;
  emoji: string;
  image: string;
  category: string;
  shortDescription: string;
  growingModes: GrowingMode[];
  planting: {
    period: string;
    temperature: string;
    conditions: string;
    spacing: string;
  };
  soil: {
    type: string;
    ph: string;
    drainage: string;
    preparation: string;
  };
  irrigation: {
    requirement: string;
    periods: string;
    overwatering: string;
  };
  fertilization: {
    nutrients: string;
    stages: string;
    general: string;
    soilAnalysis: string;
  };
  diseases: DiseaseInfo[];
  pests: PestInfo[];
  harvest: {
    period: string;
    maturitySigns: string;
    general: string;
  };
  timeline: TimelineStage[];
  potGrowing?: PotGrowingInfo;
}
