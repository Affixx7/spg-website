import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const testimonials = [
  {
    name: "Vishal Das",
    content: `I am Vishal Das, a student of the pre-final year of Integrated MSc (Tech) in Applied Geophysics at the Indian School of Mines, Dhanbad, India. One of my research works was selected for poster presentation at the 80th SEG Annual Meet, Denver, USA. SPG-NA chapter helped me grab this rare opportunity by providing me with partial funds to cover my expense towards attending the conference. 
    The members of SPG-NA have always been a constant source of inspiration for me in all my endeavors. From the knowledgeable guidance of Mrinal Sir to the friendly advice of Dhananjay and Abhijit Sir, all the members have constantly motivated me to pursue my works. 
    Words can in no way describe the kind of support that I have received from the members of SPG-NA. Yet, through this testimonial, I would like to thank the SPG-NA family for being such a support.`,
    position: "Integrated MSc (Tech) Applied Geophysics, Batch: 2007-12",
    school: "Indian School of Mines, Dhanbad, India",
  },
  {
    name: "Dr. Rima Chatterjee",
    content: `I am thankful to SPGNA chapter for sponsoring my registration Fee, travel, and accommodation during October 25 to 29, 2009, at Houston for my Oral Presentation in SEG International Technical Conference. 
    On behalf of the Dept. of Applied Geophysics, ISM, we are thankful and remain grateful towards sponsoring our STUDENTS' Travel/accommodation/registration etc. for their poster presentation in SEG International Technical Conference during October, 2010, at Denver, Colorado.`,
    position: "Associate Professor, Department of Applied Geophysics",
    school: "Indian School of Mines, Dhanbad",
  },
  {
    name: "Shaunak Ghosh",
    content: `I would like to thank you wholeheartedly for the financial support that will be provided by the SPG-NA chapter for my visit to San Francisco to attend the AGU Fall meeting 2010. I am extremely eager to attend the meeting. Without your support, it would not be possible for me to attend the meeting.`,
    position: "4th Year",
    school: "Indian Institute of Technology, Kharagpur",
  },
  {
    name: "Puneet Saraswat",
    content: `I am Puneet Saraswat, a final-year student of Applied Geophysics (5-year course) at Indian School of Mines, Dhanbad. Recently, one of my research papers was accepted for a talk at the SEG 81st Annual Meeting San Antonio, entitled “Artificial immune system based self-organizing maps for seismic facies analysis”. 
    SPG NA extended their helping hand and support for me to attend this very important convention for geophysicists. Financial help is always appreciated, but what was more appreciated about SPG NA are the moral enthusiasm, support, and homely environment I experienced.`,
    position: "5th Year student, Applied Geophysics (2007-2012)",
    school: "Indian School of Mines, Dhanbad",
  },
];

const TestimonialsPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Typography variant="h4" gutterBottom component={'div'}>
          <strong>Testimonials</strong>
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom component={'div'}>
                    <strong>{testimonial.name}</strong>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {testimonial.content}
                  </Typography>
                  <Typography variant="subtitle1" component={'div'}>
                    <strong>{testimonial.position}</strong>
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {testimonial.school}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TestimonialsPage;
