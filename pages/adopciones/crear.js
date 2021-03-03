import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dropzone from "../../components/FileUploader/Dropzone";
import Navbar from "../../components/navbar/Navbar";
import AdoptForm from "../../components/forms/AdoptForm";
import AdoptPreview from "../../components/preview/AdoptPreview";
import styles from "../../styles/crear.module.css";

function getSteps() {
  return ["Formulario", "Agregar Imágenes", "Publicar"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <AdoptForm />;
    case 1:
      return <Dropzone />;
    case 2:
      return <AdoptPreview />;
    default:
      return "Unknown stepIndex";
  }
}

export default function crear() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    console.log(activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={styles.crear__container}>
      <Navbar />
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
            <Typography className={styles.menu__container} component={"div"}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </>
        ) : (
          <>
            <Typography className={styles.menu__container} component={"div"}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={styles.btn__container}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Atrás
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
              </Button>
            </div>
          </>
        )}
      </>
    </div>
  );
}
