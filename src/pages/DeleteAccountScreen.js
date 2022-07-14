import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
} from 'react-native';

//import * as parse from '../Util/Parse';

// Styles
import styles from '../styles/DeleteAccountStyle';
import { deleteAccount } from '../services/api';
import { strings } from '../lang/i18n';
import Toolbar from '../components/ToolBar';
import TitleHeader from '../components/TitleHeader';
import { withNavigation } from 'react-navigation';

const icon_remove = require('../img/trash-simple.png');

class DeleteAccountScreen extends Component {
  constructor(props) {
    super(props);

    const { url, id, token, logout_function } =
      this.props.navigation.state.params;

    this.state = {
      isLoading: false,
      url,
      id,
      token,
      logout_function,
    };

  }

  /**
   * return const navigate = this.props.navigation
   */
  returnConstNavigate() {
    const { navigate } = this.props.navigation;
    return navigate;
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  async deleteAccount() {
    this.setState({ isLoading: true });

    await deleteAccount(
        this.state.url, this.state.id, this.state.token
      )
      .then(response => {
        if (response.data.success) {
          
          const { navigate } = this.props.navigation;

          const user_id = this.state.id;
          const user_token = this.state.token;

          this.state.logout_function(user_id, user_token, navigate);

          this.setState({ isLoading: false });
        }
      })
      .catch(error => {
        console.log({ error });
        this.setState({ isLoading: false });
      });
  }


  showAlertBeforeDelete() {
    Alert.alert(
      strings('delete_popup_title'),
      strings('delete_popup_msg'),
      [
        {
          text: strings('delete_popup_cancel'),
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: strings('delete_popup_ok'),
          onPress: () => this.deleteAccount(),
        },
      ],
      { cancelable: true },
    );
  }

  render() {
    return (
      <ScrollView
        style={[styles.parentContainer, { backgroundColor: '#FBFBFB' }]}
      >
        <View>
          <Toolbar onPress={() => this.props.navigation.goBack()} />
          <TitleHeader
            text={strings('delete_account')}
            align="center"
          />
          <Text style={styles.description}>
            {strings('delete_screen_description')}
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.showAlertBeforeDelete();
              }}
              style={styles.cardContact}
            >
              <View style={styles.leftContact}>
                <Image source={icon_remove} style={styles.trash} />
                <Text style={{ color: '#000' }}>
                  {strings('delete_account')}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          
        </View>
      </ScrollView>
    );
  }
}


export default withNavigation(DeleteAccountScreen);
