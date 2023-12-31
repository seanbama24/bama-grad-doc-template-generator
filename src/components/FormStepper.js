import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Introduction from './steps/Introduction';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';
import Step8 from './steps/Step8';
import generateDocument from '../generateDocument';

const steps = ['Introduction', 
               'Student Information', 
               'Document Information', 
               'Table of Contents', 
               'Abstract', 
               'Additional Document Sections', 
               'Graduate Supervisory Committee Information', 
               'Review', 
               'Create Document',];

const errorPromptStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function FormStepper() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [touched, setTouched] = React.useState({});
  const [resetFormOpen, setResetFormOpen] = React.useState(false);

  const [form, setForm] = useState({
    att: false,
    gradYear: new Date(),
    name: '',
    degree: '',
    style: '',
    docType: '',
    font: '',
    titleLine1: '',
    titleLine2: '',
    titleLine3: '',
    includesChapterHeadings: false,
    chapterHeadings: ["Introduction"],
    abstractText: '',
    includeDedication: false,
    includeFigures: false,
    includeTables: false,
    includeIllustrations: false,
    includeAbbreviationsAndSymbols: false,
    includesCoChair: false,
    committeeChair: '',
    committeeCoChair: '',
    committeeMembers: ['']
  });

  // Introduction
  const [att, setATT] = React.useState(false);

  // Step 8 (these are not deprecated)
  const [errorPromptOpen, setErrorPromptOpen] = React.useState(false);
  const [missingFromForm, setMissingFromForm] = React.useState([]);
  const handleErrorPromptOpen  = () => setErrorPromptOpen(true);
  const handleErrorPromptClose = () => setErrorPromptOpen(false);

  const isStepCompleted = (step) => {
    switch(step) {
      case 1: // Student Information
        // doesnt check for valid grad date
        if (form.name == '' || form.degree == '') return false;
        break;
      case 2: // Document Information
        if (form.docType == '' || form.font == '' || form.titleLine1 == '' || form.titleLine2 == '' || form.titleLine3 == '') return false;
        break;
      case 3: // Table of Contents
        if (form.includesChapterHeadings) {
          for (let chapter of form.chapterHeadings) {
            if (chapter == '') return false;
          }
        }
        break;
      case 4: // Abstract
        const words = form.abstractText.trim().split(/\s+/).filter(Boolean);
        if (words.length == 0 || words.length > 350) return false;
        break;
      case 6: // Graduate Supervisory Committee Information
        if (form.committeeChair == '' || (form.includesCoChair && form.committeeCoChair == '')) return false;
        for (let member of form.committeeMembers) {
          if (member == '') return false;
        }
        break;
    }
    return true;
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    touchNewStep();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleResetForm = () => {
    const genericForm = {
      att: false,
      gradYear: new Date(),
      name: '',
      degree: '',
      style: '',
      docType: '',
      font: '',
      titleLine1: '',
      titleLine2: '',
      titleLine3: '',
      includesChapterHeadings: false,
      chapterHeadings: ["Introduction"],
      abstractText: '',
      includeDedication: false,
      includeFigures: false,
      includeTables: false,
      includeIllustrations: false,
      includeAbbreviationsAndSymbols: false,
      includesCoChair: false,
      committeeChair: '',
      committeeCoChair: '',
      committeeMembers: ['']
    };
    setForm(genericForm);
    setActiveStep(0);
    setTouched({})
    handleCloseResetPrompt();

  };

  const handleStep = (step) => () => {
    touchNewStep();
    setActiveStep(step);
  };

  const touchNewStep = () => {
    const newTouched = touched;
    newTouched[activeStep + 1] = true; // '+ 1' to enable clicking activeStep + 1
    setTouched(newTouched);
  };
 
  const handleGenerateDocument = () => {

    const stepsMissing = []
    
    for (let i = 0; i < steps.length; i++) if (!isStepCompleted(i)) stepsMissing.push(steps[i]);
    
    setMissingFromForm(stepsMissing);
    if (stepsMissing.length == 0) { // if form complete, generate the doc
        generateDocument(form);
    }  else { // if form is not completed, show error prompt
        handleErrorPromptOpen();
    }

  };

  const handleEditActiveStep = (index) => {
    setActiveStep(index);
  };

  const handleCheckBox = () => {
    const newATTVal = !att
    setATT(newATTVal);
  };
  
  const handleResetButtonClick = () => {
    setResetFormOpen(true);
  };

  const handleCloseResetPrompt = () => {
    setResetFormOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }} md={{ width: '50%' }}>
      {/* This handles the actual stepper component */}
      <h2 style={{"color": "#9E1B32"}}>Thesis and Dissertation Document Generator</h2>
      <hr></hr>
      <div style={{"display": "flex", "flexGrow": "1"}}>
        <div style={{"max-height": "100px"/*, "marginTop": "68px"*/}}>
          <Stepper  nonLinear activeStep={activeStep} style={{margin: '1em 0em 0em 0em'}} orientation="vertical">
            {steps.map((label, index) => {
              const stepProps = {};
              return (
                <Step key={label} {...stepProps}
                      completed={(isStepCompleted(index) && touched[index]) || index == 0}
                      sx={{ 
                        '& .MuiStepLabel-root .Mui-completed': {
                          color: '#9E1B32'
                        },
                        '& .MuiStepLabel-root .Mui-active': {
                          color: '#9E1B32'
                        }
                      }}>
                  <StepButton color="inherit" onClick={handleStep(index)} disabled={!touched[index] && !touched[index - 1] && index > 1}>{label}</StepButton>
                </Step>
              );
            })}

          </Stepper>
        </div>

        {/* This acts as a switch statement to decide what component to render based on activeStep */}
        <div id="textView" style={{"height": "650px", "margin-left": "20px", /*"margin-right": "20px", "margin-top": "20px", "overflow-y": "auto", */"flexGrow": "4", "max-width": "1000px"}}>
          {
            {
              0: <Introduction checkmark={att} onClick={() => handleCheckBox()} />,
              1: <Step1 form={form} setForm={setForm}/>,
              2: <Step2 form={form} setForm={setForm}/>,
              3: <Step3 form={form} setForm={setForm}/>,
              4: <Step4 form={form} setForm={setForm}/>,
              5: <Step5 form={form} setForm={setForm}/>,
              6: <Step6 form={form} setForm={setForm}/>,
              7: <Step7 updateStep={handleEditActiveStep} form={form} setForm={setForm}/>,
              8: <Step8 form={form}/>,
            }[activeStep]
          }
          {/* This contains previous, next, skip buttons for stepping */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {activeStep === 0 ?
              <Button style={{color: 'white', backgroundColor: '#9E9E9E'}} color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button> :
              <Button style={{color: 'white', backgroundColor: '#9E1B32'}} color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
            }
            <Box sx={{ flex: '1 1 auto' }} />
            <Button style={{color: 'white', backgroundColor: '#9E1B32'}} color="inherit" onClick={handleResetButtonClick} sx={{ mr: 1 }}>Reset</Button>
            <Dialog
              open={resetFormOpen}
              onClose={handleCloseResetPrompt}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you would like to reset your form data?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  All of your data will be erased from the form and you will have to start over.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseResetPrompt} style={{color: 'white', backgroundColor: '#9E1B32'}}>No</Button>
                <Button onClick={handleResetForm} style={{color: 'white', backgroundColor: '#9E1B32'}} autoFocus>Yes</Button>
              </DialogActions>
            </Dialog>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep === steps.length - 1 ? <Button onClick={handleGenerateDocument} style={{color: 'white', backgroundColor: '#9E1B32'}}>Create Document</Button> : <Button onClick={handleNext} style={{color: 'white', backgroundColor: '#9E1B32'}}>Next</Button>}
          </Box>
        </div>
      </div>


    {/*Error Prompt*/}
    <div>
      <Modal
        open={errorPromptOpen}
        onClose={handleErrorPromptClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={errorPromptStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">The following steps are incomplete:</Typography>
          {missingFromForm.map(item => ( <Typography id="modal-modal-description" sx={{ mt: 2 }}>-{item}</Typography> ))}
          {/* DEBUG BUTTON
          <hr></hr>
          <Button onClick={generateDocument}>Generate Document Anyway (debug)</Button>
          */}
        </Box>
      </Modal>
    </div>
      
      {/* This contains previous, next, skip buttons for stepping
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          style={{color: '#9E1B32'}}
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {isStepOptional(activeStep) && (
          <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
            Skip
          </Button>
        )}

        {activeStep === steps.length - 1 ? <Button onClick={generateDocument} style={{color: '#9E1B32'}}>Create Document</Button> : <Button onClick={handleNext} style={{color: '#9E1B32'}}>Next</Button>}
      </Box> */}


      {/* This contains old code used as a reference when setting up this component */}
      {/* {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )} */}
    </Box>
  );
}

export default FormStepper;
