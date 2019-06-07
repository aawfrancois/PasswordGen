import React from 'react'
import {Text, View, Button} from 'react-native'
import axios from 'react-native-axios'
import {Header, Card} from 'react-native-elements'
import RadioForm from 'react-native-simple-radio-button';
import firebase from 'firebase'

export default class Main extends React.Component {

    state = {
        password: '',
        value:'passphrase'
    }


    generatePassword = () => {
        let self = this;
        axios.get(`https://makemeapassword.ligos.net/api/v1/${this.state.value}/plain?pc=1&wc=5&sp=n&maxCh=64`)
            .then(function (response) {
                self.setState({password: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    displayCard = () => {
        if (this.state.password != '') {
            return (
                <Card title="generated Password">
                    <Text>
                        {this.state.password}
                    </Text>
                </Card>
            )
        }
    }

    componentDidMount() {
        const {currentUser} = firebase.auth();

        this.setState({currentUser})
    }

    render() {
        let radio_props = [
            {label: 'passphrase', value: 'passphrase' },
            {label: 'alphanumeric', value: 'alphanumeric' }
        ];

        const {currentUser} = this.state

        return (
            <View>
                <Header
                    centerComponent={{text: 'pWordGen', style: {color: '#d4d7ef'}}}
                />
                <Card title="Choose type of password">
                    <View>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={(value) => {this.setState({value:value})}}
                        />
                    </View>
                </Card>

                <Button
                    onPress={this.generatePassword}
                    title="Generate"
                    color="#9b42f4"
                />
                {this.displayCard()}
            </View>
        );
    }
}
