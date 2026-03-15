import { useState, useEffect } from 'react';
import { portfolioData } from '../models/portfolioData';

export const usePortfolio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating backend fetch
    setData(portfolioData);
  }, []);

  const getProjects = () => data?.professionalProjects || [];
  const getProjectById = (id) => data?.professionalProjects?.find(p => p.id === parseInt(id));
  const getCPProfiles = () => data?.competitiveProgramming || [];
  
  // Dynamic fetch for all archive sections
  const getAllArchives = () => data?.archives || [];

  return { data, getProjects, getProjectById, getCPProfiles, getAllArchives };
};