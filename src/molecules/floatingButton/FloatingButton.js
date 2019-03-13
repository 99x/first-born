import React, { Component } from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import { StyleSheet, Animated, Dimensions, TouchableOpacity, LayoutAnimation, Platform, Keyboard } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import FloatingButtonItem from './FloatingButtonItem';

import { isIphoneX } from '../../utils/platform';
import { getTouchableComponent, getRippleProps } from '../../utils/touchable';

const DEVICE_WIDTH = Dimensions.get('window').width;
const ACTION_BUTTON_SIZE = 56;

export class FloatingButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      keyboardHeight: 0
    };

    this.mainBottomAnimation = new Animated.Value(props.distanceToEdge + props.mainVerticalDistance);
    this.actionsBottomAnimation = new Animated.Value(ACTION_BUTTON_SIZE + props.distanceToEdge + props.actionsPaddingTopBottom + props.mainVerticalDistance);
    this.animation = new Animated.Value(0);
    this.actionsAnimation = new Animated.Value(0);
    this.visibleAnimation = new Animated.Value(props.visible ? 0 : 1);
    /*
     * this animation will fix an error on ReactNative (Android) where
     * interpolations with 0 and 1 don't work as expected.
     */
    this.fadeAnimation = new Animated.Value(props.visible ? 1 : 0);
  }

  componentDidMount() {
    const { openOnMount, listenKeyboard } = this.props;

    if (openOnMount) {
      this.animateButton();
    }

    if (listenKeyboard) {
      const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
      const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
      this.keyboardWillShowListener = Keyboard.addListener(showEvent, this.onKeyboardShow);
      this.keyboardWillHideListener = Keyboard.addListener(hideEvent, this.onKeyboardHideHide);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        Animated.parallel([
          Animated.spring(this.visibleAnimation, { toValue: 0 }),
          Animated.spring(this.fadeAnimation, { toValue: 1 })
        ]).start();
      } if (!nextProps.visible) {
        Animated.parallel([
          Animated.spring(this.visibleAnimation, { toValue: 1 }),
          Animated.spring(this.fadeAnimation, { toValue: 0 })
        ]).start();
      }
    }
  }

  componentWillUnmount() {
    const { listenKeyboard } = this.props;

    if (listenKeyboard) {
      this.keyboardWillShowListener.remove();
      this.keyboardWillHideListener.remove();
    }
  }

  onKeyboardShow = (e) => {
    const { distanceToEdge, actionsPaddingTopBottom } = this.props;
    const { height } = e.endCoordinates;

    Animated.parallel([
      Animated.spring(
        this.actionsBottomAnimation,
        {
          bounciness: 0,
          toValue: (ACTION_BUTTON_SIZE + distanceToEdge + actionsPaddingTopBottom + height) - (isIphoneX() ? 40 : 0),
          duration: 250
        }
      ),
      Animated.spring(
        this.mainBottomAnimation,
        {
          bounciness: 0,
          toValue: (distanceToEdge + height) - (isIphoneX() ? 40 : 0),
          duration: 250
        }
      )
    ]).start();
  };

  onKeyboardHideHide = () => {
    const { distanceToEdge, actionsPaddingTopBottom } = this.props;

    Animated.parallel([
      Animated.spring(
        this.actionsBottomAnimation,
        {
          bounciness: 0,
          toValue: ACTION_BUTTON_SIZE + distanceToEdge + actionsPaddingTopBottom,
          duration: 250
        }
      ),
      Animated.spring(
        this.mainBottomAnimation,
        {
          bounciness: 0,
          toValue: distanceToEdge,
          duration: 250
        }
      )
    ]).start();
  };

  getIcon = () => {
    const { iconName } = this.props;

    return <Icon name={iconName ? "md-" + iconName : !this.state.active ? "md-add" : "md-close"} size={22} color={"#FFF"} />;
  };

  handlePressItem = (itemName) => {
    const { onPressItem } = this.props;

    if (onPressItem) {
      onPressItem(itemName);
    }

    this.reset();
  };

  reset = () => {
    Animated.spring(this.animation, { toValue: 0 }).start();
    Animated.spring(this.actionsAnimation, { toValue: 0 }).start();
    this.updateState({
      active: false
    }, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
  };

  animateButton = () => {
    const {
      overrideWithAction,
      actions,
      floatingIcon,
      dismissKeyboardOnPress,
      onPressMain
    } = this.props;
    const { active } = this.state;

    if (dismissKeyboardOnPress) {
      Keyboard.dismiss();
    }

    if (overrideWithAction) {
      this.handlePressItem(actions[0].name);

      return;
    }

    if (onPressMain) {
      onPressMain(!active);
    }

    if (!active) {

      Animated.spring(this.actionsAnimation, { toValue: 1 }).start();

      // only execute it for the background to prevent extra calls
      LayoutAnimation.configureNext({
        duration: 180,
        create: {
          type: LayoutAnimation.Types.easeInEaseOut,
          property: LayoutAnimation.Properties.opacity
        }
      });

      this.updateState({
        active: true
      }, () => {
        if (this.props.onOpen) {
          this.props.onOpen();
        }
      });
    } else {
      this.reset();
    }
  };

  renderMainButton() {
    const {
      color,
      overrideWithAction,
      distanceToEdge
    } = this.props;
    const { active } = this.state;

    const position = Platform.OS === "android" ? "right" : "center";

    const animatedVisibleView = {
      opacity: this.fadeAnimation,
      transform: [{
        rotate: this.visibleAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '90deg']
        })
      }, {
        scale: this.visibleAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0]
        })
      }]
    };

    let animatedViewStyle = {
      transform: [{
        rotate: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg']
        })
      }]
    };

    if (overrideWithAction) {
      animatedViewStyle = {};
    }

    const Touchable = getTouchableComponent();
    const propStyles = {
      backgroundColor: !active ? color : "#d81717",
      bottom: this.mainBottomAnimation // I need to imporove this to run on native thread and not on JS thread
    };

    if (['left', 'right'].indexOf(position) > -1) {
      propStyles[position] = distanceToEdge;
    }

    return (
      <Animated.View
        style={[
          styles.buttonContainer,
          styles[`${position}Button`],
          propStyles
        ]}
        accessible={true}
        accessibilityLabel={'Floating Action Button'}
      >
        <Touchable
          {...getRippleProps(color)}
          style={styles.button}
          activeOpacity={0.85}
          onPress={this.animateButton}
        >
          <Animated.View style={[styles.buttonTextContainer, animatedViewStyle]}>
            {this.getIcon()}
          </Animated.View>
        </Touchable>
      </Animated.View>
    );
  }

  renderActions() {
    const {
      actions,
      overrideWithAction,
      distanceToEdge,
      actionsPaddingTopBottom
    } = this.props;

    const position = Platform.OS === "android" ? "right" : "center";
    const { active, keyboardHeight } = this.state;

    if (!actions || actions.length === 0) {
      return undefined;
    }

    if (overrideWithAction) {
      return null;
    }

    const animatedActionsStyle = {
      opacity: this.actionsAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
    };

    const actionsStyles = [
      styles.actions,
      styles[`${position}Actions`],
      animatedActionsStyle,
      {
        bottom: this.actionsBottomAnimation
      }
    ];

    if (active) {
      actionsStyles.push(styles[`${position}ActionsVisible`]);
    }

    const sortedActions = actions.sort((a, b) => a.position - b.position);

    return (
      <Animated.View style={actionsStyles} pointerEvents="box-none">
        {
          sortedActions.map((action) => {
            const textColor = action.textColor || action.actionsTextColor;
            const textBackground = action.textBackground || action.actionsTextBackground;

            return (
              <FloatingButtonItem
                paddingTopBottom={actionsPaddingTopBottom}
                distanceToEdge={distanceToEdge}
                key={action.name}
                textColor={textColor}
                textBackground={textBackground}
                {...action}
                position={position}
                active={active}
                onPress={action.onPress}
              />
            );
          })
        }
      </Animated.View>
    );
  }

  renderTappableBackground() {
    const { overlayColor } = this.props;

    // TouchableOpacity don't require a child
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.overlay, { backgroundColor: overlayColor }]}
        onPress={this.handlePressBackdrop}
      />
    );
  }

  handlePressBackdrop = () => {
    const { onPressBackdrop } = this.props;
    if (onPressBackdrop) {
      onPressBackdrop();
    }
    this.reset();
  }

  updateState = (nextState, callback) => {
    const { onStateChange } = this.props;
    this.setState(nextState, () => {
      if (callback) {
        callback();
      }
      if (onStateChange) {
        onStateChange({
          isActive: this.state.active
        });
      }
    });
  }

  render() {
    const { active } = this.state;
    const { showBackground } = this.props;

    return (
      <Animated.View
        pointerEvents="box-none"
        style={[styles.overlay, { backgroundColor: 'transparent' }]}
      >
        {
          (active && showBackground) &&
          this.renderTappableBackground()
        }
        {
          this.renderActions()
        }
        {
          this.renderMainButton()
        }
      </Animated.View>
    );
  }
}

FloatingButton.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    icon: PropTypes.any,
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
    textBackground: PropTypes.string,
    textColor: PropTypes.string,
    component: PropTypes.func
  })),
  color: PropTypes.string,
  distanceToEdge: PropTypes.number,
  mainVerticalDistance: PropTypes.number,
  visible: PropTypes.bool,
  overlayColor: PropTypes.string,
  position: PropTypes.oneOf(['right', 'left', 'center']),
  overrideWithAction: PropTypes.bool, // replace mainAction with first action from actions
  floatingIcon: PropTypes.any,
  showBackground: PropTypes.bool,
  openOnMount: PropTypes.bool,
  actionsPaddingTopBottom: PropTypes.number,
  iconHeight: PropTypes.number,
  iconWidth: PropTypes.number,
  listenKeyboard: PropTypes.bool,
  dismissKeyboardOnPress: PropTypes.bool,
  onPressItem: PropTypes.func,
  onPressMain: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onPressBackdrop: PropTypes.func,
  onStateChange: PropTypes.func
};

FloatingButton.defaultProps = {
  dismissKeyboardOnPress: false,
  listenKeyboard: false,
  actionsPaddingTopBottom: 8,
  overrideWithAction: false,
  visible: true,
  color: '#000',
  overlayColor: 'rgba(68, 68, 68, 0.6)',
  position: 'right',
  distanceToEdge: 30,
  openOnMount: false,
  showBackground: true,
  iconHeight: 15,
  iconWidth: 15,
  mainVerticalDistance: 0
};

const styles = StyleSheet.create({
  actions: {
    position: 'absolute',
    bottom: 85,
    zIndex: 10
  },
  rightActions: {
    alignItems: 'flex-end',
    right: -1000 // this magic number will make always disspear the text from screen
  },
  leftActions: {
    alignItems: 'flex-start',
    left: -1000 // this magic number will make always disspear the text from screen
  },
  centerActions: {
    left: -1000
  },
  rightActionsVisible: {
    right: 0
  },
  leftActionsVisible: {
    left: 0
  },
  centerActionsVisible: {
    left: (DEVICE_WIDTH / 2) - 30
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
    zIndex: 0
  },
  buttonContainer: {
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    zIndex: 2,
    width: ACTION_BUTTON_SIZE,
    height: ACTION_BUTTON_SIZE,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: '#000000',
    shadowRadius: 3,
    elevation: 5,
    position: 'absolute'
  },
  button: {
    zIndex: 3,
    width: ACTION_BUTTON_SIZE,
    height: ACTION_BUTTON_SIZE,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightButton: {},
  leftButton: {},
  centerButton: {
    left: (DEVICE_WIDTH / 2) - 28
  },
  buttonTextContainer: {
    borderRadius: 28,
    width: ACTION_BUTTON_SIZE,
    height: ACTION_BUTTON_SIZE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});