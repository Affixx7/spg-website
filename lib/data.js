import fs from 'fs';
import path from 'path';

/**
 * Utility function to read JSON data files at build time
 * @param {string} filename - Name of the JSON file (e.g., 'members.json')
 * @returns {Object} Parsed JSON data
 */
export function getStaticData(filename) {
  const filePath = path.join(process.cwd(), 'data', filename);
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

/**
 * Get home page data
 */
export function getHomeData() {
  return getStaticData('home.json');
}

/**
 * Get members data
 */
export function getMembersData() {
  const members = getStaticData('members.json');
  const benefits = getStaticData('memberBenefits.json');
  return { ...members, ...benefits };
}

/**
 * Get board data
 */
export function getBoardData() {
  return getStaticData('board.json');
}

/**
 * Get societies data
 */
export function getSocietiesData() {
  return getStaticData('societies.json');
}

/**
 * Get achievements data
 */
export function getAchievementsData() {
  return getStaticData('achievements.json');
}

/**
 * Get mission data
 */
export function getMissionData() {
  return getStaticData('mission.json');
}

/**
 * Get newsletters data
 */
export function getNewslettersData() {
  return getStaticData('newsletters.json');
}

/**
 * Get testimonials data
 */
export function getTestimonialsData() {
  return getStaticData('testimonials.json');
}

/**
 * Get awards data
 */
export function getAwardsData() {
  return getStaticData('awards.json');
}

/**
 * Get code of conduct data
 */
export function getCodeOfConductData() {
  return getStaticData('codeOfConduct.json');
}

/**
 * Get FAQ data
 */
export function getFaqData() {
  return getStaticData('faq.json');
}
