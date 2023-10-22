import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  type DialogProps,
} from "~/components/ui/dialog";
import { Portal } from "@ark-ui/react";
import { XIcon } from "lucide-react";
import { Stack } from "styled-system/jsx";
import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { Textarea } from "../ui/textarea";
import {
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioLabel,
} from "~/components/ui/radio-button-group";
import { Text } from "../ui/typography";
import { Label } from "../ui/label";

const options = ['Manja', 'Srednja', 'Visoka'];

export const ContributionForm = (props: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button>Otvori formu</Button>
      </DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogContainer>
          <DialogContent>
            <Stack gap="8" p="6">
              <Stack gap="1">
                <DialogTitle>Poruka</DialogTitle>
                <DialogDescription>
                    Unesite jednu riječ koju bi ste željeli da se nađe u ćeliji.<br/>
                    Primjer poruke: "Sloboda"
                </DialogDescription>
                <Textarea placeholder="Unesite poruku" />

                <Label>Vaznost:</Label>
                <RadioButtonGroup defaultValue="M" w="full">
                  {options.map((option, id) => (
                    <Radio
                      key={id}
                      value={option}
                      px="0"
                      flex="1 0 auto"
                    >
                      <RadioControl />
                      <RadioLabel>{option}</RadioLabel>
                    </Radio>
                  ))}
                </RadioButtonGroup>
              </Stack>
              <Stack gap="3" direction="row" width="full">
                <DialogCloseTrigger asChild>
                  <Button variant="outline" width="full">
                    Odustani
                  </Button>
                </DialogCloseTrigger>
                <Button width="full">Pošalji</Button>
              </Stack>
            </Stack>
            <DialogCloseTrigger asChild position="absolute" top="2" right="2">
              <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
                <XIcon />
              </IconButton>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  );
};
