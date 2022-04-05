import React from 'react'
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  Textarea,
} from "@chakra-ui/react";

const NoteForm = ({setHeader, setNote, saveCards, header, note}) => {
  return (
    <div>
      {" "}
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          value={header}
          onChange={(e) => {
            setHeader(e.target.value);
          }}
        />
        <FormLabel>Notes</FormLabel>
        <Textarea
          mb={3}
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <Button
          // isLoading={isSubmitting}
          type="submit"
          colorScheme="primary"
          size="lg"
          fontSize="md"
          onClick={saveCards}
        >
          save
        </Button>
      </FormControl>
    </div>
  );
}

export default NoteForm