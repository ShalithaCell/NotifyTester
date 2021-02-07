import React from 'react';
import { Text } from "react-native";

type textProps = {
    name: string;
}

const BasicTextView = ({ name }: textProps) => <Text>{name}</Text>;

export default BasicTextView;
