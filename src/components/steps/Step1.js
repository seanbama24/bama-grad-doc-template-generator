// Step 1 - Student Information
// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const degreeList = [
  { value: "Accounting MMA", label: "Accounting MMA" },
  { value: "Accounting PhD", label: "Accounting PhD" },
  { value: "Advertising Public Relations MA", label: "Advertising Public Relations MA" },
  { value: "Aerospace Engineering and Mechanics MSAEM", label: "Aerospace Engineering and Mechanics MSAEM" },
  { value: "Aerospace Engineering and Mechanics PhD", label: "Aerospace Engineering and Mechanics PhD" },
  { value: "American Studies MA", label: "American Studies MA" },
  { value: "Anthropology MA", label: "Anthropology MA" },
  { value: "Anthropology PhD", label: "Anthropology PhD" },
  { value: "Applied Mathematics PhD", label: "Applied Mathematics PhD" },
  { value: "Applied Statistics MS", label: "Applied Statistics MS" },
  { value: "Applied Statistics PhD", label: "Applied Statistics PhD" },
  { value: "Archival Studies CRT", label: "Archival Studies CRT" },
  { value: "Art History MA", label: "Art History MA" },
  { value: "Athletic Training MS", label: "Athletic Training MS" },
  { value: "Biological Sciences MA", label: "Biological Sciences MA" },
  { value: "Biology MS", label: "Biology MS" },
  { value: "Biology PhD", label: "Biology PhD" },
  { value: "Book Arts CRT", label: "Book Arts CRT" },
  { value: "Book Arts MFA", label: "Book Arts MFA" },
  { value: "Business Administration EMBA", label: "Business Administration EMBA" },
  { value: "Business Administration MBA", label: "Business Administration MBA" },
  { value: "Business Analytics MS", label: "Business Analytics MS" },
  { value: "Chemical Engineering MCE", label: "Chemical Engineering MCE" },
  { value: "Chemical Engineering PhD", label: "Chemical Engineering PhD" },
  { value: "Chemistry MSC", label: "Chemistry MSC" },
  { value: "Chemistry PhD", label: "Chemistry PhD" },
  { value: "Civil Engineering MCV", label: "Civil Engineering MCV" },
  { value: "Civil Engineering PhD", label: "Civil Engineering PhD" },
  { value: "College Teaching CRT", label: "College Teaching CRT" },
  { value: "Communication & Information Sciences PhD", label: "Communication & Information Sciences PhD" },
  { value: "Communication Studies MA", label: "Communication Studies MA" },
  { value: "Computer Science MSCS", label: "Computer Science MSCS" },
  { value: "Computer Science PhD", label: "Computer Science PhD" },
  { value: "Conflict Resolution CRT", label: "Conflict Resolution CRT" },
  { value: "Consumer Sciences MS", label: "Consumer Sciences MS" },
  { value: "Counselor Education EDS", label: "Counselor Education EDS" },
  { value: "Counselor Education PhD", label: "Counselor Education PhD" },
  { value: "Counselor Education-Clinical Mental Health Counseling MA", label: "Counselor Education-Clinical Mental Health Counseling MA" },
  { value: "Counselor Education-Rehabilitation Counseling MA", label: "Counselor Education-Rehabilitation Counseling MA" },
  { value: "Counselor Education-School Counseling MA", label: "Counselor Education-School Counseling MA" },
  { value: "Creative Writing MFA", label: "Creative Writing MFA" },
  { value: "Criminology & Criminal Justice MS", label: "Criminology & Criminal Justice MS" },
  { value: "Curriculum and Instruction EDD", label: "Curriculum and Instruction EDD" },
  { value: "Curriculum and Instruction PHD", label: "Curriculum and Instruction PHD" },
  { value: "Dance MFA", label: "Dance MFA" },
  { value: "Digital Communication CRT", label: "Digital Communication CRT" },
  { value: "Economics (Quantitative) MA", label: "Economics (Quantitative) MA" },
  { value: "Economics (Quantitative) PHD", label: "Economics (Quantitative) PHD" },
  { value: "Educational Leadership EDD", label: "Educational Leadership EDD" },
  { value: "Educational Leadership EDS", label: "Educational Leadership EDS" },
  { value: "Educational Leadership MA", label: "Educational Leadership MA" },
  { value: "Educational Leadership PhD", label: "Educational Leadership PhD" },
  { value: "Educational Psychology EDS", label: "Educational Psychology EDS" },
  { value: "Educational Psychology MA", label: "Educational Psychology MA" },
  { value: "Educational Psychology PhD", label: "Educational Psychology PhD" },
  { value: "Educational Research PhD", label: "Educational Research PhD" },
  { value: "Electrical Engineering MSEE", label: "Electrical Engineering MSEE" },
  { value: "Electrical Engineering PhD", label: "Electrical Engineering PhD" },
  { value: "Elementary Education EDS", label: "Elementary Education EDS" },
  { value: "Elementary Education MA", label: "Elementary Education MA" },
  { value: "English MA", label: "English MA" },
  { value: "English PhD", label: "English PhD" },
  { value: "English as a Second Language MA", label: "English as a Second Language MA" },
  { value: "Environmental Engineering MS", label: "Environmental Engineering MS" },
  { value: "Family Nurse Practitioner CRT", label: "Family Nurse Practitioner CRT" },
  { value: "Finance MS", label: "Finance MS" },
  { value: "Finance PhD", label: "Finance PhD" },
  { value: "Geographic Information Systems CRT", label: "Geographic Information Systems CRT" },
  { value: "Geography MS", label: "Geography MS" },
  { value: "Geography PhD", label: "Geography PhD" },
  { value: "Geology MS", label: "Geology MS" },
  { value: "Geology PhD", label: "Geology PhD" },
  { value: "German MA", label: "German MA" },
  { value: "Health Education & Promotion MPH", label: "Health Education & Promotion MPH" },
  { value: "Health Education & Promotion PhD", label: "Health Education & Promotion PhD" },
  { value: "Health Studies MA", label: "Health Studies MA" },
  { value: "Higher Education Administration EDD", label: "Higher Education Administration EDD" },
  { value: "Higher Education Administration MA", label: "Higher Education Administration MA" },
  { value: "Higher Education Administration PhD", label: "Higher Education Administration PhD" },
  { value: "History MA", label: "History MA" },
  { value: "History PhD", label: "History PhD" },
  { value: "Hospitality Management MS", label: "Hospitality Management MS" },
  { value: "Human Development and Family Studies MS", label: "Human Development and Family Studies MS" },
  { value: "Human Environmental Sciences MHS", label: "Human Environmental Sciences MHS" },
  { value: "Human Nutrition MS", label: "Human Nutrition MS" },
  { value: "Human Nutrition PhD", label: "Human Nutrition PhD" },
  { value: "Instructional Leadership EDD", label: "Instructional Leadership EDD" },
  { value: "Instructional Leadership PhD", label: "Instructional Leadership PhD" },
  { value: "Instructional Technology CRT", label: "Instructional Technology CRT" },
  { value: "Instructional Technology MA", label: "Instructional Technology MA" },
  { value: "Interdisciplinary MA", label: "Interdisciplinary MA" },
  { value: "Interdisciplinary MS", label: "Interdisciplinary MS" },
  { value: "Interdisciplinary PhD", label: "Interdisciplinary PhD" },
  { value: "Journalism and Media Studies MA", label: "Journalism and Media Studies MA" },
  { value: "Kinesiology MA", label: "Kinesiology MA" },
  { value: "Kinesiology PhD", label: "Kinesiology PhD" },
  { value: "Library & Information Studies MLIS", label: "Library & Information Studies MLIS" },
  { value: "Literacy Research, Theory & Pedagogy CRT", label: "Literacy Research, Theory & Pedagogy CRT" },
  { value: "Management Information Systems MS", label: "Management Information Systems MS" },
  { value: "Management MA", label: "Management MA" },
  { value: "Management PhD", label: "Management PhD" },
  { value: "Marine Science MS", label: "Marine Science MS" },
  { value: "Marketing MS", label: "Marketing MS" },
  { value: "Marketing PhD", label: "Marketing PhD" },
  { value: "Master's Entry to the Profession of Nursing MSN", label: "Master's Entry to the Profession of Nursing MSN" },
  { value: "Materials Metallurgical Engineering PhD", label: "Materials Metallurgical Engineering PhD" },
  { value: "Materials Science PhD", label: "Materials Science PhD" },
  { value: "Mathematics MA", label: "Mathematics MA" },
  { value: "Mathematics PhD", label: "Mathematics PhD" },
  { value: "Mechanical Engineering MSME", label: "Mechanical Engineering MSME" },
  { value: "Mechanical Engineering PhD", label: "Mechanical Engineering PhD" },
  { value: "Metallurgical Engineering MS", label: "Metallurgical Engineering MS" },
  { value: "Museum Studies CRT", label: "Museum Studies CRT" },
  { value: "Music DMA", label: "Music DMA" },
  { value: "Music MM", label: "Music MM" },
  { value: "Non-Degree Arts & Sciences Student", label: "Non-Degree Arts & Sciences Student" },
  { value: "Non-Degree Business Student", label: "Non-Degree Business Student" },
  { value: "Non-Degree Business Student (Distance Learning)", label: "Non-Degree Business Student (Distance Learning)" },
  { value: "Non-Degree Communication & Information Sciences Student", label: "Non-Degree Communication & Information Sciences Student" },
  { value: "Non-Degree Communication & Information Sciences Student (Distance Learning)", label: "Non-Degree Communication & Information Sciences Student (Distance Learning)" },
  { value: "Non-Degree Community Health Sciences Student", label: "Non-Degree Community Health Sciences Student" },
  { value: "Non-Degree Education Student", label: "Non-Degree Education Student" },
  { value: "Non-Degree Education Student (Distance Learning)", label: "Non-Degree Education Student (Distance Learning)" },
  { value: "Non-Degree Education Student Certification", label: "Non-Degree Education Student Certification" },
  { value: "Non-Degree Engineering Student", label: "Non-Degree Engineering Student" },
  { value: "Non-Degree Engineering Student (Distance Learning)", label: "Non-Degree Engineering Student (Distance Learning)" },
  { value: "Non-Degree Human Environmental Sciences Student", label: "Non-Degree Human Environmental Sciences Student" },
  { value: "Non-Degree Human Environmental Sciences Student (Distance Learning)", label: "Non-Degree Human Environmental Sciences Student (Distance Learning)" },
  { value: "Non-Degree Nursing Student", label: "Non-Degree Nursing Student" },
  { value: "Non-Degree Nursing Student (Distance Learning)", label: "Non-Degree Nursing Student (Distance Learning)" },
  { value: "Non-Degree Social Work Student", label: "Non-Degree Social Work Student" },
  { value: "Non-Degree Social Work Student (Distance Learning)", label: "Non-Degree Social Work Student (Distance Learning)" },
  { value: "Nursing DNP", label: "Nursing DNP" },
  { value: "Nursing MSN", label: "Nursing MSN" },
  { value: "Nursing PhD", label: "Nursing PhD" },
  { value: "Operations Management MS", label: "Operations Management MS" },
  { value: "Operations Management PhD", label: "Operations Management PhD" },
  { value: "Physics MS", label: "Physics MS" },
  { value: "Physics PhD", label: "Physics PhD" },
  { value: "Political Science MA", label: "Political Science MA" },
  { value: "Political Science PhD", label: "Political Science PhD" },
  { value: "Population Health Sciences MS", label: "Population Health Sciences MS" },
  { value: "Psychiatric Mental Health Nurse Practitioner CRT", label: "Psychiatric Mental Health Nurse Practitioner CRT" },
  { value: "Psychology PhD", label: "Psychology PhD" },
  { value: "Public Administration MPA", label: "Public Administration MPA" },
  { value: "Qualitative Research CRT", label: "Qualitative Research CRT" },
  { value: "Quantitative Research CRT", label: "Quantitative Research CRT" },
  { value: "Religion in Culture MA", label: "Religion in Culture MA" },
  { value: "Romance Languages MA", label: "Romance Languages MA" },
  { value: "Romance Languages PhD", label: "Romance Languages PhD" },
  { value: "Rural Community Health MS", label: "Rural Community Health MS" },
  { value: "School Psychology PhD", label: "School Psychology PhD" },
  { value: "Secondary Education EDS", label: "Secondary Education EDS" },
  { value: "Secondary Education MA", label: "Secondary Education MA" },
  { value: "Social & Cultural Studies CRT", label: "Social & Cultural Studies CRT" },
  { value: "Social Work DSW", label: "Social Work DSW" },
  { value: "Social Work MSW", label: "Social Work MSW" },
  { value: "Social Work PhD", label: "Social Work PhD" },
  { value: "Special Education EDD", label: "Special Education EDD" },
  { value: "Special Education EDS", label: "Special Education EDS" },
  { value: "Special Education MA", label: "Special Education MA" },
  { value: "Special Education PhD", label: "Special Education PhD" },
  { value: "Speech Language Pathology MS", label: "Speech Language Pathology MS" },
  { value: "Studio Art MA", label: "Studio Art MA" },
  { value: "Studio Art MFA", label: "Studio Art MFA" },
  { value: "Tax Accounting MTA", label: "Tax Accounting MTA" },
  { value: "Teaching English to Speakers of Other Languages", label: "Teaching English to Speakers of Other Languages" },
  { value: "Theatre MFA", label: "Theatre MFA" },
  { value: "Women Studies CRT", label: "Women Studies CRT" },
  { value: "Women Studies MA", label: "Women Studies MA" }
];

export default function Step1({ name, degree, gradYear, updateName, updateDegree, updateGradYear}) {
  console.log(degreeList.sort());
  function YearPicker() {
    const MyDatePicker = () => {
      // const [startDate, setStartDate] = useState(new Date());
  
      return (
        <DatePicker
          selected={gradYear}
          onChange={updateGradYear}
          showYearPicker
          dateFormat="yyyy"
        />
      );
    };
  
    return (
      <div>
        <MyDatePicker />
      </div>
    );
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <h3>What is your full name?</h3>
      <TextField value={name} onChange={updateName}></TextField>
      <h3>What degree are you currently pursuing?</h3>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <TextField id="degree-selection" select label="Select" value={degree} onChange={updateDegree}>
            {degreeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
      </FormControl>
      <h3>When is your anticipated graduation year?</h3>
      <YearPicker />
    </Box>
  );
}