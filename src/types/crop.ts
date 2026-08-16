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

export interface Crop {
  id: string;
  name: string;
  emoji: string;
  image: string;
  category: string;
  shortDescription: string;
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
}
