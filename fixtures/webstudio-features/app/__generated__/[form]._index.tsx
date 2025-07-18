/* eslint-disable */
/* This is a auto generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import {
  Body as Body,
  Form as Form,
} from "@webstudio-is/sdk-components-react-router";
import {
  Box as Box,
  Label as Label,
  Input as Input,
  Button as Button,
  Heading as Heading,
} from "@webstudio-is/sdk-components-react";

export const projectId = "cddc1d44-af37-4cb6-a430-d300cf6f932d";

export const lastPublished = "2025-05-15T22:04:05.511Z";

export const siteName = "KittyGuardedZone";

export const breakpoints = [
  { id: "UoTkWyaFuTYJihS3MFYK5" },
  { id: "ZMaWCtWpH-ao0e_kgIHqR", minWidth: 372 },
  { id: "Z8WjyXWkCrr35PXgjHdpY", minWidth: 472 },
];

export const favIconAsset: string | undefined = undefined;

// Font assets on current page (can be preloaded)
export const pageFontAssets: string[] = [];

export const pageBackgroundImageAssets: string[] = [];

const Page = (_props: { system: any }) => {
  let [formState, set$formState] = useVariableState<any>("initial");
  let [formState_1, set$formState_1] = useVariableState<any>("initial");
  return (
    <Body className={`w-body`}>
      <Form
        state={formState}
        onStateChange={(state: any) => {
          formState = state;
          set$formState(formState);
        }}
        className={`w-webhook-form`}
      >
        {(formState === "initial" || formState === "error") && (
          <Box className={`w-box`}>
            <Heading tag={"h3"} className={`w-heading`}>
              {"Default form"}
            </Heading>
            <Label className={`w-input-label`}>{"Name"}</Label>
            <Input name={"name"} className={`w-text-input`} />
            <Label className={`w-input-label`}>{"Email"}</Label>
            <Input name={"email"} className={`w-text-input`} />
            <Button className={`w-button`}>{"Submit"}</Button>
          </Box>
        )}
        {formState === "success" && (
          <Box className={`w-box`}>{"Thank you for getting in touch!"}</Box>
        )}
        {formState === "error" && (
          <Box className={`w-box`}>{"Sorry, something went wrong."}</Box>
        )}
      </Form>
      <Form
        state={formState_1}
        onStateChange={(state: any) => {
          formState_1 = state;
          set$formState_1(formState_1);
        }}
        action={"action"}
        className={`w-webhook-form`}
      >
        {(formState_1 === "initial" || formState_1 === "error") && (
          <Box className={`w-box`}>
            <Heading tag={"h3"} className={`w-heading`}>
              {"Form with custom action and method"}
            </Heading>
            <Label className={`w-input-label`}>{"Name"}</Label>
            <Input name={"name"} className={`w-text-input`} />
            <Label className={`w-input-label`}>{"Email"}</Label>
            <Input name={"email"} className={`w-text-input`} />
            <Button className={`w-button`}>{"Submit"}</Button>
          </Box>
        )}
        {formState_1 === "success" && (
          <Box className={`w-box`}>{"Thank you for getting in touch!"}</Box>
        )}
        {formState_1 === "error" && (
          <Box className={`w-box`}>{"Sorry, something went wrong."}</Box>
        )}
      </Form>
    </Body>
  );
};

export { Page };
