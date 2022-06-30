import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const ErrorAlert = () => {
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        {/* <AlertTitle>Error</AlertTitle> */}
        <AlertDescription>
          Error in checking the enrollment. Contact the Admin please...
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default ErrorAlert;
