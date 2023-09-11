import { Pressable, StyleSheet, Text, View } from 'react-native';
import handleFullBlock from '../utils/handleFullBlock';
import handleHalfBlock from '../utils/handleHalfBlock';
import handleUnblocked from '../utils/handleUnblocked';

export default function BlockComponent(props) {

    const styles = StyleSheet.create({
        blockcomponentcontainer: {
            flex: 1,
            flexDirection: 'row',
        },
        blockcomponentbuttons: {
            flex: 1,
            justifyContent: 'space-evenly',
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderRightWidth: 2,
        },
        blockcomponenttext: {
            textAlign: 'center',
        }
    });

    return(
        <View style={ styles.blockcomponentcontainer }>
            <Pressable 
                style={[ 
                    styles.blockcomponentbuttons, { 
                        backgroundColor: '#dc3546', 
                        borderLeftWidth: 2
                    }
                ]}
                onPress={() => handleUnblocked(
                    props.damage, 
                    props.state, 
                    props.setState, 
                    props.setDamage, 
                    props.setSpeed
                )}
            >
                <Text style={ styles.blockcomponenttext }>Unblocked</Text>
                <Text style={ styles.blockcomponenttext }>{props.damage}</Text>
            </Pressable>
            <Pressable 
                style={[ 
                    styles.blockcomponentbuttons, { 
                        backgroundColor: '#fcde44' 
                    }
                ]}
                onPress={() => handleHalfBlock(
                    props.damage, 
                    props.state, 
                    props.setState, 
                    props.setDamage, 
                    props.setSpeed
                )}
            >
                <Text style={ styles.blockcomponenttext }>Half Block</Text>
                <Text style={ styles.blockcomponenttext }>{Math.ceil(props.damage / 2)}</Text>
            </Pressable>
            <Pressable 
                style={[ 
                    styles.blockcomponentbuttons, { 
                        backgroundColor: '#66bc69' 
                    }
                ]}
                onPress={() => handleFullBlock(
                    props.setDamage, 
                    props.setSpeed
                )}
            >
                <Text style={ styles.blockcomponenttext }>Full Block</Text>
                <Text style={ styles.blockcomponenttext }>{props.damage * 0}</Text>
            </Pressable>
        </View>
        );
    };