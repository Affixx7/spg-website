import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import ObjectiveListItem from './ObjectiveListItem';  // Import the reusable component

const objectives = [
  {
    primary: "Research and Innovation",
    secondary: [
      "Encourage and support joint research projects and initiatives between Indian and American geoscientists, academic institutions, and industry partners, leveraging the expertise and resources of prominent geoscience organizations.",
      "Facilitate the exchange of knowledge and expertise between Indian and American geoscientists through conferences, workshops, and collaborative platforms to foster cutting-edge developments in the field."
    ]
  },
  {
    primary: "Education and Workforce Development",
    secondary: [
      "Provide educational programs, workshops, and resources tailored to the needs and interests of both Indian and American geoscience communities, incorporating the diverse offerings from leading geoscience organizations.",
      "Offer scholarships, mentorship programs, and networking opportunities for young Indian and American geoscientists, with a focus on collaboration and engagement with international initiatives."
    ]
  },
  {
    primary: "Funding and Scholarships",
    secondary: [
      "Develop funding opportunities for research projects and initiatives, fostering collaboration between Indian and American geoscientists and promoting innovation in the geoscience field.",
      "Establish scholarship programs for Indian and American students pursuing geoscience education, providing financial support and fostering international collaboration and exchange."
    ]
  },
  {
    primary: "Collaboration and Partnerships",
    secondary: [
      "Establish and strengthen partnerships between Indian and American geoscience organizations, academic institutions, and industry players to facilitate collaboration and resource-sharing.",
      "Organize joint conferences, symposiums, and events that bring together Indian and American geoscientists to address common challenges and opportunities in the field of geoscience."
    ]
  },
  {
    primary: "Public Engagement and Outreach",
    secondary: [
      "Increase awareness and understanding of the role and importance of geosciences in both Indian and American communities through targeted outreach programs, public lectures, and educational resources.",
      "Engage with policymakers and stakeholders in Indian and American communities to communicate the societal benefits of geoscience research and its applications in decision-making processes."
    ]
  },
  {
    primary: "Sustainability and Environmental Stewardship",
    secondary: [
      "Promote responsible and sustainable practices in the exploration, development, and management of Earth's resources within both Indian and American geoscience communities.",
      "Advocate for the integration of geoscientific knowledge into environmental policy and decision-making within Indian and American communities to minimize adverse impacts on ecosystems and communities."
    ]
  },
  {
    primary: "Diversity, Equity, and Inclusion",
    secondary: [
      "Foster a diverse, inclusive, and equitable geoscience community by promoting the participation and success of underrepresented groups within both Indian and American geoscience communities.",
      "Implement policies and initiatives to address barriers to diversity and inclusion within the geoscience profession and broader Indian and American communities."
    ]
  }
];

export default function ObjectivesSection() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Mission Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Mission
        </Typography>
        <Box sx={{ lineHeight: 1.6 }}>
          To foster collaboration between Indian and American geoscientists by leveraging the strengths and resources of leading geoscience organizations, in order to advance the understanding and responsible application of geoscience for the sustainable development and management of Earth's resources and the environment.
        </Box>
      </Box>

      {/* Objectives Section */}
      <Box>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Objectives
        </Typography>

        <List sx={{ listStyleType: 'none', pl: 0 }}>
          {objectives.map((objective, index) => (
            <ObjectiveListItem 
              key={index}
              primary={objective.primary}
              secondary={objective.secondary}
              index={index}
            />
          ))}
        </List>
      </Box>
    </Container>
  );
}