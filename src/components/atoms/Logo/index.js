import React from "react";
import { LogoImage } from "./styles";
import { StyleSheet, View, Image } from "react-native";
import logoImage from '../../../../assets/logo.png';

export const Logo = () => {
  return (
    <LogoImage source={logoImage}/>
  );
}
