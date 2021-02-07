import React, { useEffect } from "react";
import { List, ListItem } from 'react-native-elements';
import { FlatList, ListRenderItem, TouchableHighlight } from "react-native";
import { SampleData } from "../../types/interfaces/SampleData";

export interface Props {
    data?: SampleData[];
}

const TaskScreen: React.FC<Props> = (props?) =>
{
    const { data } = props;

    const [ dataValue, setData ] = React.useState(data);

    const arr: SampleData[] = [
        { email: 'shalithax@gmail.com', username: 'Shalitha' },
    ];

    useEffect(() =>
    {
        setData(arr);
    });

    return (
        <List>
            <FlatList<SampleData>
                data={dataValue}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableHighlight>
                        <ListItem
                            roundAvatar
                            title={`${item.username}`}
                            subtitle={item.email}
                        />
                    </TouchableHighlight>
                )}
            />
        </List>
    );
};

export default TaskScreen;
