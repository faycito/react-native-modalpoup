

import React, {Component} from 'react';
import {
    Text, 
    View, 
    ViewPropTypes, 
    TouchableWithoutFeedback, 
    Modal
} from 'react-native';
import PropTypes from 'prop-types';


export default class ModalPopup extends Component {

   
    _getContent() {
        const { children, contentStyle } = this.props;

        return (
            <View style={{contentStyle}}>
                {children}
            </View>
        )
    }

    _getTitle() {
        const { title, titleStyle } = this.props
        if(title){
            return (
                <Text style={[{
                    textAlign:'center',
                    color:'#757575',
                    fontSize:18,
                    margin:16,
                    marginBottom: 10
                }, titleStyle]}>
                    {title}
                </Text>
            )
        }
    }

    _getOutsideTouch(pressed) {
        return (
            <TouchableWithoutFeedback onPress={pressed} style={{ flex: 1, width: '100%' }}>
                <View style={{width:'100%', flex:1}}>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    render() {
        const {
            modalStyle, isVisible, animationType, onClose, onShow,
            onOrientationChange, onTouchOutside, supportedOrientations, modalBgColor,
            outsideBgColor, modalBorderRadius, modalPadding
        } = this.props;
        return (
            <Modal
                animationType={animationType}
                transparent={true}
                visible={isVisible}
                onRequestClose={onClose}
                onShow={onShow}
                onOrientationChange={onOrientationChange}
                supportedOrientations={supportedOrientations}
            >
                <View style={[{
                    flex: 1,
                    backgroundColor: outsideBgColor ? outsideBgColor : 'rgba(0,0,0,.3)',
                    padding: 24
                }]}>

                    {this._getOutsideTouch(onTouchOutside)}

                    <View style={[{
                        backgroundColor: modalBgColor ? modalBgColor : 'white',
                        width: '100%',
                        minHeight:100,
                        borderRadius: modalBorderRadius,
                        padding: modalPadding ? 18 : 0,
                        paddingBottom: this.props.title ? 28 : 0
                    }, modalStyle]}>

                        {this._getTitle()}

                        {this._getContent()}

                    </View>
                    {this._getOutsideTouch(onTouchOutside)}
                </View>
            </Modal>
        )
    }
}

ModalPopup.propTypes = {
    modalStyle: ViewPropTypes.style,
    modalPadding: PropTypes.bool,
    contentStyle: ViewPropTypes.style,
    overlayStyle: ViewPropTypes.style,
    isVisible: PropTypes.bool,
    animationType: Modal.propTypes.animationType,
    onClose: PropTypes.func,
    onShow: PropTypes.func,
    onOrientationChange: Modal.propTypes.onOrientationChange,
    onTouchOutside: PropTypes.func,
    supportedOrientations: Modal.propTypes.supportedOrientations,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style
}

ModalPopup.defaultProps = {
    isVisible: false,
    onClose: () => null,
    modalPadding: true
};