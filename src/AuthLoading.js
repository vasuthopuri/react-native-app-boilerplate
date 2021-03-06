import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';
import ProgressBar from './_globals/ProgressBar';
import {colors} from './_globals/colorPalette';

class AuthLoading extends PureComponent {

    render() {
        return (
            <View flex center style={styles.container}>
                <ProgressBar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    }
});

export default AuthLoading;
