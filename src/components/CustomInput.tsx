import { CheckIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Switch,
  useMediaQuery,
} from "@chakra-ui/react";
import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { FC, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

interface CustomInputInterface {
  initialValue: number;
  isDisabled: boolean;
  type: string;
  dispatchAction: ActionCreatorWithPayload<any, string>;
  dispatchToggle: ActionCreatorWithoutPayload<string>;
  minPossible: number;
  maxPossible: number;
}
const CustomInput: FC<CustomInputInterface> = ({
  isDisabled,
  dispatchToggle,
  initialValue,
  type,
  dispatchAction,
  minPossible,
  maxPossible,
}) => {
  const dispatch = useDispatch();

  const [breakPoint480] = useMediaQuery("(min-width: 480px)");
  const [value, setValue] = useState<string>(initialValue.toString());
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const dispatchValue = useMemo(
    () =>
      debounce((value) => {
        setIsDebouncing(true);
        if (value.length === 0) {
          dispatch(dispatchAction(0));
        } else {
          dispatch(dispatchAction(parseInt(value)));
        }
        setTimeout(() => {
          setIsDebouncing(false);

          setIsSuccess(true);
        }, 1000);
      }, 1000),
    []
  );
  return (
    <Flex width="100%" alignItems="center" gap="10px">
      <Switch isChecked={!isDisabled} colorScheme="whiteAlpha" onChange={() => dispatch(dispatchToggle())} />
      <InputGroup size="sm" fontSize="14px">
        <InputLeftAddon
          children={type}
          backdropBlur="lg"
          backgroundColor="whiteAlpha.100"
          borderColor="whiteAlpha.200"
          boxShadow="md"
          fontWeight="medium"
          width={breakPoint480 ? "unset" : "100px"}
          minWidth={breakPoint480 ? "158px" : "unset"}
          isTruncated
        />
        <Input
          focusBorderColor="orange.100"
          borderColor="whiteAlpha.200"
          boxShadow="md"
          type="number"
          placeholder="0"
          isDisabled={isDisabled}
          value={value}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length === 0) return setValue(value);
            if (parseInt(value) <= maxPossible) {
              setValue(value);
              dispatchValue(value);
            } else {
              setValue(maxPossible.toString());
              dispatchValue(maxPossible.toString());
            }
          }}
        />
        {type.includes("Repair") && (
          <InputRightAddon
            children="%"
            backdropBlur="lg"
            backgroundColor="whiteAlpha.100"
            borderColor="whiteAlpha.200"
            boxShadow="md"
            fontWeight="medium"
          />
        )}
      </InputGroup>
      <IconButton
        size="sm"
        backdropBlur="lg"
        backgroundColor="whiteAlpha.100"
        borderColor="whiteAlpha.300"
        boxShadow="md"
        aria-label="check"
        isLoading={isDebouncing}
        icon={<CheckIcon color={isSuccess ? "green.500" : "whiteAlpha.50"} />}
      ></IconButton>
    </Flex>
  );
};

export default CustomInput;
